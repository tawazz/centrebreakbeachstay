import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../components/icon";
import { RoomCard } from "../../components/room-card";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { StructuredData } from "../../components/structured-data";
import { bookingUrl, business, rooms } from "../../lib/content";

export const metadata: Metadata = {
  title: "Jurien Bay Accommodation Near the Coast",
  description:
    "Book accommodation near Jurien Bay at Centre Break Beach Stay in Green Head. Choose from double, twin, family and self-contained rooms near Dynamite Bay.",
  alternates: {
    canonical: "/jurien-bay-accommodation/",
  },
  openGraph: {
    title: "Jurien Bay Accommodation Near the Coast",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with rooms for couples, families and coastal stopovers.",
    url: "/jurien-bay-accommodation/",
    images: ["/images/property-exterior.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurien Bay Accommodation Near the Coast",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with rooms for couples, families and coastal stopovers.",
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
          <img src="/images/property-exterior.webp" alt="Centre Break Beach Stay accommodation near Jurien Bay in Green Head" />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="pin" size={16} /> Jurien Bay accommodation · Green Head</p>
            <h1 id="page-title">Accommodation near Jurien Bay<br /><em>by Dynamite Bay.</em></h1>
            <p>Stay at Centre Break Beach Stay in Green Head, around 15 minutes from Jurien Bay and just 50 metres from Dynamite Bay.</p>
            <div className="hero-actions">
              <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href="#rooms">Explore rooms</a>
            </div>
          </div>
        </section>

        <section className="answer-section section-pad-small" aria-labelledby="accommodation-answer-title">
          <div className="shell answer-layout">
            <div className="answer-copy">
              <p className="eyebrow">A quieter Jurien Bay base</p>
              <h2 id="accommodation-answer-title">Looking for Jurien Bay accommodation?</h2>
              <p className="lead">Centre Break Beach Stay is in Green Head, a small coastal village 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              <p>It is a practical base for visitors coming north for sea lion tours, beaches, fishing, snorkelling, wildflowers and other Jurien Bay area activities. Come back to a comfortable room, a nearby beach and an onsite restaurant for lunch or dinner.</p>
            </div>
            <div className="fact-grid" aria-label="Centre Break Beach Stay location facts">
              <div className="fact-card"><strong>15 min</strong><span>from Jurien Bay</span></div>
              <div className="fact-card"><strong>50m</strong><span>from Dynamite Bay</span></div>
              <div className="fact-card"><strong>7</strong><span>room options</span></div>
            </div>
          </div>
        </section>

        <section className="room-section accommodation-room-section" id="rooms" aria-labelledby="rooms-title">
          <div className="shell section-pad">
            <div className="section-heading section-heading-row rooms-heading">
              <div>
                <p className="eyebrow">Rooms for coastal stopovers</p>
                <h2 id="rooms-title">Find your kind<br /><em>of comfortable.</em></h2>
              </div>
              <div className="room-heading-aside">
                <p>Choose from double, twin, family and self-contained options. Every room includes Wi-Fi, air conditioning, TV and the essentials for a good night’s sleep.</p>
                <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <Icon name="arrow" size={17} /></a>
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
              <p className="eyebrow">Plan your Jurien Bay stay</p>
              <h2 id="stay-details-title">Stay close to<br /><em>the day.</em></h2>
              <p className="lead">Base yourself in Green Head and spend the day exploring the Jurien Bay region before returning to Dynamite Bay.</p>
              <ul className="detail-list">
                <li><Icon name="check" size={16} /> Sea lion tours and coastal activities nearby</li>
                <li><Icon name="check" size={16} /> Swimming, snorkelling, fishing and kayaking</li>
                <li><Icon name="check" size={16} /> Three Bays Walkway and wildflowers inland</li>
                <li><Icon name="check" size={16} /> Centre Break Restaurant onsite for lunch and dinner</li>
              </ul>
            </div>
            <div className="detail-card">
              <p className="eyebrow">Good to know</p>
              <h3>{business.name}</h3>
              <p>{business.address.streetAddress}<br />{business.address.addressLocality} {business.address.addressRegion} {business.address.postalCode}</p>
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
              <details className="faq-item">
                <summary>Is Centre Break Beach Stay in Jurien Bay?</summary>
                <p>No. Centre Break Beach Stay is in Green Head, around 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              </details>
              <details className="faq-item">
                <summary>How close is the beach?</summary>
                <p>Dynamite Bay is approximately 50 metres from Centre Break Beach Stay.</p>
              </details>
              <details className="faq-item">
                <summary>What room types are available?</summary>
                <p>Options include budget double, ensuite double, twin, family and self-contained rooms sleeping from two to six guests.</p>
              </details>
              <details className="faq-item">
                <summary>Is there food onsite?</summary>
                <p>Centre Break Restaurant is open to the public seven days a week for lunch from 11am–2pm and dinner from 5pm–7pm.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner">
            <div><p className="eyebrow eyebrow-light">Base yourself here</p><h2>Come for Jurien Bay.<br /><em>Stay by Dynamite Bay.</em></h2></div>
            <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <Icon name="arrow" size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
