# Jurien Bay booking growth implementation

Last updated: 29 August 2026

## Positioning

Centre Break Beach Stay gives Jurien Bay searchers a clear choice:

> Jurien Bay accommodation, 15 minutes away. Stay 50 metres from Dynamite Bay, with rooms for couples, families and groups up to six.

The site states the location in the hero, room section, address card, FAQ and structured data. It names Green Head before a visitor opens the booking engine.

## Implemented in the workspace

- `/jurien-bay-accommodation/` now leads with the search intent, the 15-minute drive and the 50-metre walk to Dynamite Bay.
- The page includes a room-fit guide for overnight stopovers, couples, families and groups up to six.
- Room cards expose occupancy, bedding, bathroom arrangements and key amenities before the visitor checks rates.
- The accommodation FAQ uses one content source for the visible answers and the JSON-LD FAQ schema.
- Every Cloudbeds link has a stable `data-booking-placement` marker. Room links also carry `data-booking-room-name`.
- Booking links use `rel="noopener"` so the booking engine can receive a referrer when the analytics setup needs it.
- The static sitemap marks the current page set as updated on 29 August 2026.

## Measurement contract

Cloudbeds reservations and booked revenue define the conversion count. Google Analytics, Booking.com, Tripadvisor and ad platforms explain the journey. They do not add to the booking total.

Report these views side by side:

1. First touch, using the first stored UTM source, medium and campaign or the first external referrer host.
2. Last non-direct, using the latest stored non-direct UTM source or external referrer host.
3. Self-reported source, collected in Cloudbeds, at checkout or during check-in with the question: `How did you first hear about us?`

Use low-volume directional reporting. Do not use algorithmic attribution until the property has enough confirmed bookings to support it.

### Event

The site emits one event for each marked Cloudbeds CTA:

| Event | Trigger | Required properties |
| --- | --- | --- |
| `booking_cta_click` | Visitor clicks a Cloudbeds booking link | `page_path`, `placement`, `room_name` when present |

The event also includes these available properties:

- `destination_domain`
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`
- `first_touch_source`, `first_touch_medium`, `first_touch_campaign`
- `first_touch_referrer_host`
- `last_non_direct_source`

The tracker pushes the event to `dataLayer`. If the site runs a standalone GA4 `gtag` without Google Tag Manager, it sends the same event through `gtag` instead of creating a second GTM event. The tracker stores UTM values, a referrer host, the landing path and a timestamp in browser storage. It rejects values containing `@` and does not store guest names or email addresses.

### UTM rules

Use lowercase names and the campaign name `jurien_bay_demand` for the launch test.

Paid search example:

```text
https://centrebreakbeachstay.com.au/jurien-bay-accommodation/?utm_source=google&utm_medium=cpc&utm_campaign=jurien_bay_demand&utm_term={keyword}&utm_content=search_ad
```

Visitor centre example:

```text
https://centrebreakbeachstay.com.au/jurien-bay-accommodation/?utm_source=visitturquoisecoast&utm_medium=referral&utm_campaign=jurien_bay_demand&utm_content=visitor_centre_listing
```

Partner examples:

```text
https://centrebreakbeachstay.com.au/jurien-bay-accommodation/?utm_source=jurien_bay_oceanic&utm_medium=referral&utm_campaign=jurien_bay_demand&utm_content=where_to_stay
https://centrebreakbeachstay.com.au/jurien-bay-accommodation/?utm_source=skydive_jurien_bay&utm_medium=referral&utm_campaign=jurien_bay_demand&utm_content=where_to_stay
```

The browser-side tracker carries missing UTM values from the visitor journey to the Cloudbeds URL. It preserves values already present on a booking link. It adds the CTA placement as `utm_content` only when campaign data exists and the link has no content value.

## Account work still required

The following steps need access to the property’s Google, Cloudbeds and partner accounts.

### 1. Confirm the address before editing listings

The workspace currently uses:

```text
Centre Break Beach Stay
1 Green Head Road
Green Head WA 6514
```

Public listings also show Lot 401 and Lot 402 Ocean View Drive. Confirm the current official address against the property record, then use one version in Google Business Profile, Cloudbeds, the website, the Shire listing, tourism listings and OTAs. Do not update every listing until the owner confirms the source of truth.

### 2. Repair the review and arrival experience

Reply to every current review with a specific response. Give the operating team a short weekly list:

- Cleanliness and room condition
- Room-size and bedding expectations
- Bathroom location and privacy
- Check-in instructions and arrival reliability
- Value concerns and service consistency

Ask each genuine guest for an honest review after checkout. Do not offer incentives. Keep the request short and use the review platform’s own link.

### 3. Complete Google Business Profile

- Confirm the address, phone, category, hours, amenities and booking URL.
- Add current exterior, room, bathroom, restaurant, beach and arrival photos.
- Add Q&A entries that state Green Head, the 15-minute drive from Jurien Bay and the 50-metre distance to Dynamite Bay.
- Add the new landing page as the booking destination when the profile supports it.
- Publish accurate off-peak availability or local-stay posts. Do not publish dates that Cloudbeds cannot sell.

Google’s local guidance focuses on relevance, distance and prominence. Complete information, review responses and current photos support those signals. There is no payment shortcut for local ranking.

### 4. Audit Cloudbeds and Google Hotel Search

In Cloudbeds, verify:

- Google Hotel Search is active for the property.
- Rates, availability, room names, images, occupancy and cancellation terms match the booking engine.
- Free booking links resolve to the official Cloudbeds booking engine.
- The reservation export records Google Hotel Search or the relevant Cloudbeds digital marketing origin when a booking comes through that path.
- The same GA4 property or GTM container connects to the website and booking engine.
- Cross-domain measurement includes the public site and `us2.cloudbeds.com`.
- The booking engine sends `begin_checkout` and `purchase` with transaction ID, value, dates, nights and room details.

Use one GA4/GTM connection. A second container can duplicate booking events.

### 5. Request free local links

Ask the Turquoise Coast Visitor Centre to link directly to:

```text
https://centrebreakbeachstay.com.au/jurien-bay-accommodation/
```

Ask the following operators to add a trackable “where to stay” link:

- Turquoise Heli
- Jurien Bay Oceanic
- Turquoise Safaris
- Skydive Jurien Bay
- Jurien Bay Adventure Tours

Give each partner a unique `utm_source`. Link to the accommodation page, not the homepage, so the visitor lands on room options and current booking CTAs.

## Paid search test

Run one search campaign after the free listing and measurement checks pass.

- Budget: A$8 per day for 30 days, A$240 planned spend and a hard cap below A$300.
- Network: Google Search only.
- Landing page: `/jurien-bay-accommodation/`.
- Conversion: confirmed Cloudbeds `purchase`, checked against the reservation export.
- Ad copy: `Jurien Bay Accommodation 15 Min Away · 50m to Dynamite Bay · Rooms for 2–6 · Onsite Restaurant`.
- Offer: no discount in this test.

Use exact or phrase intent:

- `Jurien Bay accommodation`
- `accommodation near Jurien Bay`
- `family accommodation near Jurien Bay`
- `self contained accommodation Jurien Bay`
- `Green Head accommodation`

Add negative keywords for jobs, rentals, real estate, camping, caravan, backpacker work, long-term, lease and permanent accommodation.

Review search terms and confirmed bookings each week. Continue a source only when Cloudbeds shows incremental off-peak bookings at a lower cost than the equivalent OTA commission.

## Rollout

### Week 1

- Confirm the address.
- Reply to reviews.
- Start the operational fix list.
- Audit Cloudbeds rates, availability, room images and Google Hotel Search.

### Weeks 2–3

- Publish the workspace site.
- Confirm the route and trailing slash behavior.
- Test every room link on desktop and mobile.
- Test the booking event, UTM handoff and Cloudbeds purchase path.
- Submit the sitemap and inspect the accommodation URL in Search Console.

### Weeks 3–4

- Complete Google Business Profile.
- Update tourism listings.
- Request direct visitor-centre and operator links.

### Weeks 5–8

- Run the capped A$8/day search test.
- Review search terms, booking clicks, Cloudbeds origins, confirmed bookings and off-peak room nights each week.

### Weeks 9–12

- Keep the sources that produce confirmed Cloudbeds bookings at a lower acquisition cost than the comparable OTA commission.
- Stop sources that produce clicks without confirmed bookings after the test window and search-term review.

## Launch QA

- [ ] Address, phone, room facts, restaurant hours and check-in details match the owner-approved record.
- [ ] `/jurien-bay-accommodation/` loads at the public domain.
- [ ] Any retired URL redirects at the hosting layer.
- [ ] Every room CTA opens the intended Cloudbeds room.
- [ ] Mobile sticky booking CTA works without covering content or the browser safe area.
- [ ] UTM parameters survive the website-to-Cloudbeds click.
- [ ] `booking_cta_click` contains `page_path`, `placement` and `room_name` when relevant.
- [ ] GA4 DebugView or GTM Preview shows one click event per click.
- [ ] Cloudbeds receives the same analytics connection as the website.
- [ ] A test reservation reconciles with Cloudbeds value, transaction ID, dates, nights, room and origin.
- [ ] Search Console receives the sitemap and the new URL inspection.

## Source links

- [Turquoise Coast booking page](https://visitturquoisecoast.com.au/book-online)
- [Shire of Coorow stay listing](https://coorow.wa.gov.au/stay/)
- [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en)
- [Google free hotel booking links](https://support.google.com/hotelprices/answer/10472394?hl=en)
- [Cloudbeds Google Hotel Search](https://myfrontdesk.cloudbeds.com/hc/en-us/articles/1260803124050-Google-Hotel-Search-Everything-you-need-to-know)
- [Cloudbeds booking-engine events](https://myfrontdesk.cloudbeds.com/hc/en-us/articles/43914021209627-Google-Analytics-Events-in-Cloudbeds-Booking-Engine)
