"use client";

import { useEffect } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
type Touch = Partial<Record<UtmKey | "referrer_host" | "landing_path" | "captured_at", string>>;

const FIRST_TOUCH_KEY = "centrebreak:first_touch";
const LATEST_TOUCH_KEY = "centrebreak:latest_touch";
const TOUCH_KEYS = new Set<string>([
  ...UTM_KEYS,
  "referrer_host",
  "landing_path",
  "captured_at",
]);
const IGNORED_REFERRER_HOSTS = new Set([
  "accounts.google.com",
  "checkout.stripe.com",
]);

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    google_tag_manager?: Record<string, unknown>;
  }
}

const cleanValue = (value: string | null | undefined) => {
  const cleaned = value?.trim();
  if (!cleaned || cleaned.length > 160 || cleaned.includes("@")) return undefined;
  return cleaned;
};

const readUtmParams = (search: string): Touch => {
  const params = new URLSearchParams(search);
  const touch: Touch = {};

  for (const key of UTM_KEYS) {
    const value = cleanValue(params.get(key));
    if (value) touch[key] = value;
  }

  return touch;
};

const readStoredTouch = (storageKey: string): Touch => {
  try {
    const rawValue = window.localStorage.getItem(storageKey);
    if (!rawValue) return {};

    const parsed = JSON.parse(rawValue) as Record<string, unknown>;
    const touch: Touch = {};

    for (const [key, value] of Object.entries(parsed)) {
      if (!TOUCH_KEYS.has(key) || typeof value !== "string") continue;
      const cleaned = cleanValue(value);
      if (cleaned) touch[key as keyof Touch] = cleaned;
    }

    return touch;
  } catch {
    return {};
  }
};

const hasTouchSignal = (touch: Touch) =>
  UTM_KEYS.some((key) => Boolean(touch[key])) || Boolean(touch.referrer_host);

const getReferrerHost = () => {
  if (!document.referrer) return undefined;

  try {
    const referrerUrl = new URL(document.referrer);
    const ownHost = window.location.hostname.replace(/^www\./, "");
    const referrerHost = referrerUrl.hostname.toLowerCase().replace(/^www\./, "");

    if (
      referrerHost === ownHost ||
      referrerHost.endsWith(`.${ownHost}`) ||
      referrerHost === "localhost" ||
      referrerHost.endsWith(".local") ||
      referrerHost.endsWith(".cloudbeds.com") ||
      IGNORED_REFERRER_HOSTS.has(referrerHost)
    ) {
      return undefined;
    }

    return cleanValue(referrerHost);
  } catch {
    return undefined;
  }
};

const captureLandingTouch = (): Touch => {
  const touch = readUtmParams(window.location.search);
  const referrerHost = getReferrerHost();

  if (referrerHost) touch.referrer_host = referrerHost;
  if (hasTouchSignal(touch)) {
    touch.landing_path = window.location.pathname;
    touch.captured_at = new Date().toISOString();
  }

  return touch;
};

const persistLandingTouch = (touch: Touch) => {
  if (!hasTouchSignal(touch)) return;

  try {
    const firstTouch = readStoredTouch(FIRST_TOUCH_KEY);
    const latestTouch = readStoredTouch(LATEST_TOUCH_KEY);

    if (!hasTouchSignal(firstTouch)) {
      window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(touch));
    }

    window.localStorage.setItem(
      LATEST_TOUCH_KEY,
      JSON.stringify({ ...latestTouch, ...touch }),
    );
  } catch {
    // Attribution should never block a booking link when storage is unavailable.
  }
};

const getCombinedTouch = (): Touch => ({
  ...readStoredTouch(FIRST_TOUCH_KEY),
  ...readStoredTouch(LATEST_TOUCH_KEY),
  ...readUtmParams(window.location.search),
});

const isCloudbedsUrl = (href: string) => {
  try {
    const hostname = new URL(href, window.location.href).hostname;
    return hostname === "cloudbeds.com" || hostname.endsWith(".cloudbeds.com");
  } catch {
    return false;
  }
};

const normalizePlacement = (placement: string) =>
  placement.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const decorateBookingLink = (anchor: HTMLAnchorElement, touch: Touch) => {
  const destination = new URL(anchor.href, window.location.href);

  for (const key of UTM_KEYS) {
    if (!destination.searchParams.has(key) && touch[key]) {
      destination.searchParams.set(key, touch[key]);
    }
  }

  const placement = anchor.dataset.bookingPlacement;
  const hasCampaignData = UTM_KEYS.some((key) => destination.searchParams.has(key));
  if (placement && hasCampaignData && !destination.searchParams.has("utm_content")) {
    destination.searchParams.set("utm_content", normalizePlacement(placement));
  }

  anchor.href = destination.toString();
  return destination;
};

const setIfPresent = (params: Record<string, string>, key: string, value: string | undefined) => {
  if (value) params[key] = value;
};

const sendBookingClick = (
  anchor: HTMLAnchorElement,
  destination: URL,
  touch: Touch,
) => {
  const firstTouch = readStoredTouch(FIRST_TOUCH_KEY);
  const latestTouch = {
    ...readStoredTouch(LATEST_TOUCH_KEY),
    ...readUtmParams(window.location.search),
  };
  const placement = anchor.dataset.bookingPlacement ?? "unknown";
  const params: Record<string, string> = {
    page_path: window.location.pathname,
    placement,
    destination_domain: destination.hostname,
  };

  setIfPresent(params, "room_name", anchor.dataset.bookingRoomName);
  for (const key of UTM_KEYS) setIfPresent(params, key, touch[key]);
  setIfPresent(params, "first_touch_source", firstTouch.utm_source ?? firstTouch.referrer_host);
  setIfPresent(params, "first_touch_medium", firstTouch.utm_medium);
  setIfPresent(params, "first_touch_campaign", firstTouch.utm_campaign);
  setIfPresent(params, "first_touch_referrer_host", firstTouch.referrer_host);
  setIfPresent(params, "last_non_direct_source", latestTouch.utm_source ?? latestTouch.referrer_host);

  if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
  window.dataLayer.push({ event: "booking_cta_click", ...params });

  // Use the data layer when GTM is present. Use gtag directly when a site has
  // a standalone GA4 tag, so the same click does not count twice.
  if (typeof window.gtag === "function" && !window.google_tag_manager) {
    window.gtag("event", "booking_cta_click", params);
  }
};

export function AttributionTracker() {
  useEffect(() => {
    persistLandingTouch(captureLandingTouch());

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest("a[data-booking-placement]");
      if (!(anchor instanceof HTMLAnchorElement) || !isCloudbedsUrl(anchor.href)) return;

      const touch = getCombinedTouch();
      const destination = decorateBookingLink(anchor, touch);
      sendBookingClick(anchor, destination, touch);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
