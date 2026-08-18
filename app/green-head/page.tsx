import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../components/icon";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { StructuredData } from "../../components/structured-data";
import {
  bookingUrl,
  business,
  greenHeadDayPlan,
  greenHeadFaqs,
  greenHeadHighlights,
  greenHeadLinks,
  menuUrl,
  restaurantHours,
  rooms,
} from "../../lib/content";

export const metadata: Metadata = {
  title: "Green Head WA: Beaches, Things to Do & Accommodation",
  description:
    "Discover Green Head WA: Dynamite Bay, the Three Bays Walkway, sea lion tours, fishing, wildflowers and accommodation 50m from the coast.",
  alternates: {
    canonical: "/green-head/",
  },
  openGraph: {
    title: "Green Head WA: Beaches, Things to Do & Accommodation",
    description:
      "Discover Green Head WA: Dynamite Bay, the Three Bays Walkway, sea lion tours, fishing, wildflowers and accommodation 50m from the coast.",
    url: "/green-head/",
    images: ["/images/activities.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Head WA: Beaches, Things to Do & Accommodation",
    description:
      "Discover Green Head WA: Dynamite Bay, the Three Bays Walkway, sea lion tours, fishing, wildflowers and accommodation 50m from the coast.",
    images: ["/images/activities.webp"],
  },
};

export default function GreenHeadPage() {
  return (
    <>
      <SiteHeader />
      <StructuredData page="green-head" />
      <main>
        <section className="page-hero green-head-hero" aria-labelledby="page-title">
          <img
            src="/images/activities.webp"
            alt="Sheltered turquoise water and white sand at Dynamite Bay near Green Head"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light">
              <Icon name="wave" size={16} /> Turquoise Coast · Green Head, Western Australia
            </p>
            <h1 id="page-title">
              Green Head, WA
              <br />
              <em>where the coast slows down.</em>
            </h1>
            <p>
              Discover sheltered bays, sea lions, wildflowers and easy coastal walks in one of
              Western Australia&apos;s quiet fishing towns. Stay 50 metres from Dynamite Bay and
              15 minutes from Jurien Bay.
            </p>
            <div className="hero-actions">
              <a
                className="button button-light"
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                data-booking-placement="green-head-hero"
              >
                Check dates &amp; rates <Icon name="arrow" size={17} />
              </a>
              <a className="button button-ghost" href="#things-to-do">
                Explore things to do <Icon name="arrow" size={17} />
              </a>
            </div>
            <p className="booking-helper">Live availability opens in our booking partner.</p>
          </div>
          <div className="activity-hero-note" aria-label="Centre Break distance to Dynamite Bay">
            <span className="activity-hero-note-value">50m</span>
            <span>
              <strong>to Dynamite Bay</strong>
              <small>from Centre Break</small>
            </span>
          </div>
        </section>

        <section className="answer-section section-pad-small" aria-labelledby="answer-title">
          <div className="shell answer-layout green-head-answer-layout">
            <div className="answer-copy">
              <p className="eyebrow">Why visit Green Head?</p>
              <h2 id="answer-title">
                Big coastal days.
                <br />
                <em>Small-town pace.</em>
              </h2>
              <p className="lead">
                Green Head is a relaxed coastal base on the Turquoise Coast, with white sandy
                beaches, clear water and a little more space between one good thing and the next.
              </p>
              <p>
                Spend the morning in the bays, make the day bigger with a sea lion tour or a
                wildflower drive, then come back to Green Head for an easy meal and a quiet night
                close to the coast.
              </p>
            </div>
            <div className="fact-grid green-head-fact-grid" aria-label="Green Head travel facts">
              <div className="fact-card">
                <strong>2.8km</strong>
                <span>Three Bays Walkway</span>
              </div>
              <div className="fact-card">
                <strong>50m</strong>
                <span>to Dynamite Bay</span>
              </div>
              <div className="fact-card">
                <strong>15 min</strong>
                <span>to Jurien Bay</span>
              </div>
              <div className="fact-card">
                <strong>{rooms.length}</strong>
                <span>room options</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="green-head-highlights-section section-pad-small"
          id="things-to-do"
          aria-labelledby="things-to-do-title"
        >
          <div className="shell">
            <div className="section-heading-row green-head-highlights-heading">
              <div>
                <p className="eyebrow">Things to do in Green Head</p>
                <h2 id="things-to-do-title">
                  Make the day
                  <br />
                  <em>your own.</em>
                </h2>
              </div>
              <p className="section-side-copy">
                Keep it close, make it an adventure, or let the weather decide. Green Head gives
                you plenty to do without making the day feel over-planned.
              </p>
            </div>

            <div className="green-head-highlight-grid">
              {greenHeadHighlights.map((highlight, index) => (
                <article className="green-head-highlight" key={highlight.title}>
                  <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                    {highlight.link ? (
                      <a href={highlight.link} target="_blank" rel="noreferrer">
                        {highlight.linkLabel} <Icon name="arrow" size={14} />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <div className="green-head-highlights-footer">
              <p>Want more local ideas? Explore the full activities guide.</p>
              <Link className="text-link" href="/activities/">
                See all things to do near Jurien Bay <Icon name="arrow" size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="green-head-plan-section section-pad" aria-labelledby="day-plan-title">
          <div className="shell green-head-plan-grid">
            <div className="green-head-plan-copy">
              <p className="eyebrow">Free local guide</p>
              <h2 id="day-plan-title">
                A simple Green Head
                <br />
                <em>day plan.</em>
              </h2>
              <p className="lead">
                Start close to the water, leave room for one bigger adventure and keep dinner
                simple. The best part of Green Head is how easily the day can change shape.
              </p>
              <div className="inline-link-row">
                <Link className="text-link" href="/activities/">
                  Build your own day <Icon name="arrow" size={16} />
                </Link>
                <a
                  className="text-link"
                  href={greenHeadLinks.localGuide}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the local guide <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <ol className="green-head-itinerary" aria-label="Suggested Green Head day plan">
              {greenHeadDayPlan.map((step, index) => (
                <li className="green-head-itinerary-item" key={step.title}>
                  <span className="green-head-itinerary-step">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="green-head-itinerary-time">{step.time}</p>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="stay-close-section green-head-stay-section" id="stay" aria-labelledby="stay-title">
          <div className="shell stay-close-grid">
            <div className="stay-close-visual">
              <img
                src="/images/property-exterior.webp"
                alt="Centre Break Beach Stay accommodation in Green Head"
              />
              <div className="stay-close-badge">
                <Icon name="bed" size={19} />
                <span>
                  Sleep close to the coast
                  <small>Check-in from 2pm · check-out 10am</small>
                </span>
              </div>
            </div>
            <div className="stay-close-copy">
              <p className="eyebrow">Stay in Green Head</p>
              <h2 id="stay-title">
                Sleep close to
                <br />
                <em>the good stuff.</em>
              </h2>
              <p className="lead">
                Make Centre Break Beach Stay your base for beach mornings, Jurien Bay adventures
                and evenings that do not need another drive.
              </p>
              <ul className="proximity-list">
                <li>
                  <Icon name="wave" size={20} />
                  <span>
                    <strong>{business.distanceToDynamiteBay} to Dynamite Bay</strong> for an easy
                    swim, snorkel or sunset.
                  </span>
                </li>
                <li>
                  <Icon name="compass" size={20} />
                  <span>
                    <strong>{business.distanceToJurienBay} to Jurien Bay</strong> when you want to
                    make the day bigger.
                  </span>
                </li>
                <li>
                  <Icon name="bed" size={20} />
                  <span>
                    <strong>Rooms for couples and families</strong> including self-contained
                    options.
                  </span>
                </li>
                <li>
                  <Icon name="fork" size={20} />
                  <span>
                    <strong>Centre Break Restaurant onsite</strong> for lunch, dinner and a cold
                    drink close to home.
                  </span>
                </li>
              </ul>
              <div className="inline-link-row">
                <a
                  className="button button-dark"
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-booking-placement="green-head-stay"
                >
                  Check dates &amp; rates <Icon name="arrow" size={17} />
                </a>
                <Link className="text-link" href="/jurien-bay-accommodation/">
                  Explore rooms <Icon name="arrow" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="food-section section-pad green-head-restaurant-section" id="restaurant" aria-labelledby="restaurant-title">
          <div className="shell food-layout">
            <div className="food-image-grid">
              <img
                className="food-image-main"
                src="/images/crayfish.webp"
                alt="Local seafood served at Centre Break Restaurant in Green Head"
              />
              <img
                className="food-image-small"
                src="/images/property-patio.jpg"
                alt="Shaded outdoor patio at Centre Break Restaurant"
              />
              <span className="food-stamp">
                Eat
                <br />
                <em>local.</em>
              </span>
            </div>
            <div className="food-copy">
              <p className="eyebrow">Eat in Green Head</p>
              <h2 id="restaurant-title">
                Stay for dinner
                <br />
                <em>at Centre Break.</em>
              </h2>
              <p className="lead">
                You do not need to be staying overnight to enjoy Centre Break Restaurant. Stop in
                from the Jurien Bay area for local seafood, lunch, dinner and a licensed drink.
              </p>
              <p>
                The public onsite restaurant and café gives you one less decision after a day on
                the water. Pull up a chair on the shaded patio, check the menu and call ahead if
                your plans depend on a particular service time.
              </p>
              <div className="hours-card" aria-label="Centre Break Restaurant opening hours">
                {restaurantHours.map((hours) => (
                  <div key={hours.label}>
                    <span className="hours-label">{hours.label}</span>
                    <strong>{hours.display}</strong>
                  </div>
                ))}
              </div>
              <p className="hours-note">
                Open 7 days. Hours can change, so check the menu or call ahead before travelling.
              </p>
              <div className="inline-link-row">
                <a className="button button-dark" href={menuUrl} target="_blank" rel="noreferrer">
                  View the menu <Icon name="arrow" size={17} />
                </a>
                <Link className="text-link" href="/jurien-bay-restaurant/">
                  Restaurant details <Icon name="arrow" size={16} />
                </Link>
                <a className="text-link" href={business.directionsUrl} target="_blank" rel="noreferrer">
                  Get directions <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="green-head-before-section section-pad-small" aria-labelledby="before-title">
          <div className="shell green-head-before-grid">
            <div className="green-head-before-copy">
              <p className="eyebrow">Before you go</p>
              <h2 id="before-title">
                Plan with
                <br />
                <em>the latest details.</em>
              </h2>
              <p className="lead">
                Green Head is an easy place to explore, but local access, park conditions and
                restaurant hours can change. Check the latest information before setting out.
              </p>
              <div className="location-details">
                <div>
                  <Icon name="pin" size={20} />
                  <span>
                    <strong>{business.name}</strong>
                    {business.address.streetAddress}
                    <br />
                    {business.address.addressLocality} {business.address.addressRegion}{" "}
                    {business.address.postalCode}
                  </span>
                </div>
                <div>
                  <Icon name="calendar" size={20} />
                  <span>
                    <strong>Check-in / check-out</strong>
                    {business.checkInLabel} · {business.checkOutLabel}
                  </span>
                </div>
              </div>
              <div className="inline-link-row">
                <a className="button button-dark" href={business.directionsUrl} target="_blank" rel="noreferrer">
                  Get directions <Icon name="arrow" size={17} />
                </a>
                <a
                  className="text-link"
                  href={greenHeadLinks.localGuide}
                  target="_blank"
                  rel="noreferrer"
                >
                  Official Green Head guide <Icon name="arrow" size={16} />
                </a>
              </div>
            </div>

            <aside className="visit-alert" aria-labelledby="visit-alert-title">
              <p className="eyebrow">
                <Icon name="compass" size={15} /> Access update
              </p>
              <h3 id="visit-alert-title">Checking the caves?</h3>
              <p>
                The Shire currently lists the Stockyard Gully Cave Walk and southern access track
                via Cockleshell Gully Road as closed until further notice.
              </p>
              <p>
                Check the official cave information and park alerts before travelling so you can
                choose another local adventure if access has not reopened.
              </p>
              <div className="inline-link-row">
                <a className="text-link" href={greenHeadLinks.caveInformation} target="_blank" rel="noreferrer">
                  Check cave information <Icon name="arrow" size={16} />
                </a>
                <a className="text-link" href={greenHeadLinks.parkAlerts} target="_blank" rel="noreferrer">
                  Check park alerts <Icon name="arrow" size={16} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="faq-section section-pad-small" aria-labelledby="green-head-faq-title">
          <div className="shell faq-layout">
            <div>
              <p className="eyebrow">Frequently asked</p>
              <h2 id="green-head-faq-title">
                Before you
                <br />
                <em>make a plan.</em>
              </h2>
            </div>
            <div className="faq-list">
              {greenHeadFaqs.map((faq) => (
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
            <div>
              <p className="eyebrow eyebrow-light">Ready for Green Head?</p>
              <h2>
                Come for the coast.
                <br />
                <em>Stay for the quiet.</em>
              </h2>
            </div>
            <a
              className="button button-light"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              data-booking-placement="green-head-footer-cta"
            >
              Check dates &amp; rates <Icon name="arrow" size={17} />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
