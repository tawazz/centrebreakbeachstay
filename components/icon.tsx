import type { SVGProps } from "react";

type IconName =
  | "arrow"
  | "bed"
  | "calendar"
  | "check"
  | "chevron"
  | "coffee"
  | "compass"
  | "fork"
  | "menu"
  | "pin"
  | "spark"
  | "sun"
  | "users"
  | "wave"
  | "x";

export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "arrow":
      return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
    case "bed":
      return <svg {...common}><path d="M3 18v-7" /><path d="M3 15h18v3" /><path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h3A2.5 2.5 0 0 1 13 8.5V11" /><path d="M13 11V9h4a4 4 0 0 1 4 4v2" /></svg>;
    case "calendar":
      return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "chevron":
      return <svg {...common}><path d="m6 9 6 6 6-6" /></svg>;
    case "coffee":
      return <svg {...common}><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" /><path d="M17 10h1a3 3 0 0 1 0 6h-2M7 4c0 1 1 1 1 2M11 4c0 1 1 1 1 2" /></svg>;
    case "compass":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></svg>;
    case "fork":
      return <svg {...common}><path d="M7 3v5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V3M9 10v11M17 3v18M17 3a3 3 0 0 1 0 6" /></svg>;
    case "menu":
      return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
    case "pin":
      return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "spark":
      return <svg {...common}><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 15 .6 2.4L22 18l-2.4.6L19 21l-.6-2.4L16 18l2.4-.6L19 15Z" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 11a3 3 0 1 0-1.2-5.8M18 20v-1a5.6 5.6 0 0 0-2.1-4.4" /></svg>;
    case "wave":
      return <svg {...common}><path d="M3 16c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3-2.5 3-2.5" /><path d="M3 11c2.5-2.5 5-2.5 7.5 0s5 2.5 7.5 0 3-2.5 3-2.5" /></svg>;
    case "x":
      return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>;
    default:
      return null;
  }
}
