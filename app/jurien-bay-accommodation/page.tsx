import type { Metadata } from "next";
import { Icon } from "../../components/icon";
import { RoomCard } from "../../components/room-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { StructuredData } from "../../components/structured-data";
import { accommodationFaqs, assetPath, bookingUrl, business, rooms } from "../../lib/content";

export const metadata: Metadata = {
  title: "Jurien Bay Accommodation, 15 Minutes Away",
  description:
    "Looking for Jurien Bay accommodation? Centre Break Beach Stay is in Green Head, 15 minutes away and 50 metres from Dynamite Bay, with rooms for 2–6 guests.",
  alternates: {
    canonical: "/jurien-bay-accommodation/",
  },
  openGraph: {
    title: "Jurien Bay Accommodation, 15 Minutes Away",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with rooms for couples, families and groups up to six.",
    url: "/jurien-bay-accommodation/",
    images: ["/images/property-exterior.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurien Bay Accommodation, 15 Minutes Away",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with rooms for couples, families and groups up to six.",
    images: ["/images/property-exterior.webp"],
  },
};

export default function JurienBayAccommodationPage() {
  return (
    <>
      <SiteHeader />
      <StructuredData page="accommodation" />
      <main>
        <section className="page-hero jurien-page-hero" aria-labelledby="page-title">
          <img src={assetPath("/images/property-exterior.webp")} alt="Centre Break Beach Stay accommodation near Jurien Bay in Green Head" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="pin" size={16} /> Jurien Bay accommodation · Green Head</p>
            <h1 id="page-title">Jurien Bay accommodation<br /><em>15 minutes away.</em></h1>
            <p>Centre Break Beach Stay is in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay. Choose a room for 2–6 guests and check current availability.</p>
            <div className="hero-actions">
              <a className="button button-light" href={bookingUrl} target="_blank" rel="noopener" data-booking-placement="accommodation-hero">Check dates & rates <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href="#rooms">Explore rooms</a>
            </div>
            <p className="booking-helper">Live availability opens in our booking partner.</p>
          </div>
          <div className="hero-note" aria-label="Distance to Dynamite Bay"><span>50m</span><small>to Dynamite Bay</small></div>
        </section>

        <section className="answer-section section-pad-small" aria-labelledby="accommodation-answer-title">
          <div className="shell answer-layout">
            <div className="answer-copy">
              <p className="eyebrow">Jurien Bay close · Green Head closer to the beach</p>
              <h2 id="accommodation-answer-title">Jurien Bay close.<br /><em>Dynamite Bay closer.</em></h2>
              <p className="lead">Centre Break Beach Stay sits in Green Head, a small coastal village around 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              <p>Choose a quieter base with a 50-metre walk to Dynamite Bay and rooms that match your group. Sea lion tours, fishing, snorkelling and wildflowers fit into the wider Jurien Bay trip, with the restaurant onsite when you return.</p>
            </div>
            <div className="fact-grid" aria-label="Centre Break Beach Stay location facts">
              <div className="fact-card"><strong>15 min</strong><span>from Jurien Bay</span></div>
              <div className="fact-card"><strong>50m</strong><span>from Dynamite Bay</span></div>
              <div className="fact-card"><strong>{rooms.length}</strong><span>room options</span></div>
            </div>
          </div>
        </section>

        <section className="room-section accommodation-room-section" id="rooms" aria-labelledby="rooms-title">
          <div className="shell section-pad">
            <div className="section-heading section-heading-row rooms-heading">
              <div>
                <p className="eyebrow">Rooms for couples, families & stopovers</p>
                <h2 id="rooms-title">Choose the room<br /><em>that fits.</em></h2>
              </div>
              <div className="room-heading-aside">
                <p>Compare the room layout, bedding, bathroom access and amenities before checking current rates through our booking partner.</p>
                <a className="button button-dark" href={bookingUrl} target="_blank" rel="noopener" data-booking-placement="accommodation-rooms-heading">Check dates & rates <Icon name="arrow" size={17} /></a>
              </div>
            </div>
            <div className="room-fit-guide" aria-labelledby="room-fit-title">
              <p className="eyebrow" id="room-fit-title">Match the room to the trip</p>
              <div className="room-fit-grid">
                <article className="room-fit-card"><span>01</span><h3>Overnight stopovers</h3><p>Choose a double room for a simple night on the road.</p></article>
                <article className="room-fit-card"><span>02</span><h3>Couples</h3><p>Choose a double room or the 1-bedroom suite when you want more room.</p></article>
                <article className="room-fit-card"><span>03</span><h3>Families</h3><p>Family rooms sleep four or five, with the layout shown on each card.</p></article>
                <article className="room-fit-card"><span>04</span><h3>Groups up to 6</h3><p>The 2-bedroom self-contained suite gives larger groups a kitchen and separate sleeping areas.</p></article>
              </div>
            </div>
            <div className="room-grid">
              {rooms.map((room, index) => <RoomCard room={room} index={index} key={`${room.name}-${room.eyebrow}`} />)}
            </div>
          </div>
        </section>

        <section className="jurien-detail-section section-pad-small" aria-labelledby="stay-details-title">
          <div className="shell jurien-detail-grid">
            <div>
              <p className="eyebrow">Know the setup before you book</p>
              <h2 id="stay-details-title">Clear details.<br /><em>Easy arrival.</em></h2>
              <p className="lead">Pick a room from the facts below, then use the live booking page to confirm dates, guests and current rates.</p>
              <ul className="detail-list">
                <li><Icon name="check" size={16} /> Each room card shows occupancy, bedding, bathroom access and key amenities</li>
                <li><Icon name="check" size={16} /> Choose shared, private-next-door or ensuite bathroom arrangements</li>
                <li><Icon name="check" size={16} /> Check-in from 2pm and check-out by 10am</li>
                <li><Icon name="check" size={16} /> Centre Break Restaurant onsite for lunch and dinner</li>
              </ul>
            </div>
            <div className="detail-card">
              <p className="eyebrow">Good to know</p>
              <h3>{business.name}</h3>
              <p>{business.address.streetAddress}<br />{business.address.addressLocality} {business.address.addressRegion} {business.address.postalCode}</p>
              <p className="detail-card-note">Green Head, not Jurien Bay. Allow around 15 minutes along Indian Ocean Drive.</p>
              <div className="detail-card-meta">
                <span><strong>Check-in</strong>{business.checkInLabel}</span>
                <span><strong>Check-out</strong>{business.checkOutLabel}</span>
              </div>
              <a className="button button-dark" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad-small" aria-labelledby="accommodation-faq-title">
          <div className="shell faq-layout">
            <div>
              <p className="eyebrow">Frequently asked</p>
              <h2 id="accommodation-faq-title">Before you<br /><em>make a booking.</em></h2>
            </div>
            <div className="faq-list">
              {accommodationFaqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner">
            <div><p className="eyebrow eyebrow-light">Base yourself here</p><h2>Come for Jurien Bay.<br /><em>Stay by Dynamite Bay.</em></h2></div>
            <a className="button button-light" href={bookingUrl} target="_blank" rel="noopener" data-booking-placement="accommodation-footer-cta">Check dates & rates <Icon name="arrow" size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
