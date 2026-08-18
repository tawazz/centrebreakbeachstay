import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../components/icon";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { activities, bookingUrl, business, quickActivities } from "../../lib/content";

export const metadata: Metadata = {
  title: "Things to Do Near Jurien Bay & Green Head",
  description:
    "Plan things to do near Jurien Bay and Green Head, including sea lions, beaches, snorkelling, fishing, the Three Bays Walkway, wildflowers and more.",
  alternates: {
    canonical: "/activities/",
  },
  openGraph: {
    title: "Things to Do Near Jurien Bay & Green Head",
    description:
      "Plan things to do near Jurien Bay and Green Head, including sea lions, beaches, snorkelling, fishing, the Three Bays Walkway, wildflowers and more.",
    url: "/activities/",
    images: ["/images/activities.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Things to Do Near Jurien Bay & Green Head",
    description:
      "Plan things to do near Jurien Bay and Green Head, including sea lions, beaches, snorkelling, fishing, the Three Bays Walkway, wildflowers and more.",
    images: ["/images/activities.webp"],
  },
};

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero activity-page-hero" aria-labelledby="page-title">
          <img src="/images/activities.webp" alt="White sand and turquoise water near Jurien Bay and Green Head" />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="compass" size={16} /> Jurien Bay & Green Head</p>
            <h1 id="page-title">Your next good day<br /><em>starts here.</em></h1>
            <p>Sleep 50 metres from Dynamite Bay, then choose your own kind of day — sea lions, quiet coves, wildflowers, walks and wide-open coast.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#day-plan">See the day plan <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <div className="activity-hero-note" aria-label="Distance to Dynamite Bay">
            <span className="activity-hero-note-value">50m</span>
            <span><strong>to Dynamite Bay</strong><small>your closest swim</small></span>
          </div>
        </section>

        <section className="activities-intro shell section-pad-small" aria-labelledby="intro-title">
          <div className="activities-intro-grid">
            <div className="activities-intro-copy">
              <p className="eyebrow">Stay in the middle of it</p>
              <h2 id="intro-title">Less driving.<br /><em>More doing.</em></h2>
              <p className="lead">Green Head is a relaxed coastal base around 15 minutes from Jurien Bay along Indian Ocean Drive. Start with a swim close to home, head out for a bigger adventure, and come back to an easy dinner without packing up the whole day.</p>
              <div className="inline-link-row">
                <Link className="text-link" href="/jurien-bay-accommodation/">Explore rooms & rates <Icon name="arrow" size={16} /></Link>
                <Link className="text-link" href="/jurien-bay-restaurant/">Eat onsite <Icon name="arrow" size={16} /></Link>
              </div>
            </div>

            <aside className="proximity-card" aria-label="Centre Break Beach Stay location benefits">
              <p className="eyebrow"><Icon name="pin" size={15} /> The close-by advantage</p>
              <div className="proximity-stats">
                <div><strong>50 m</strong><span>to Dynamite Bay</span></div>
                <div><strong>15 min</strong><span>to Jurien Bay</span></div>
              </div>
              <p>Check in, drop your bags, and keep the coast within reach from the first swim to the last sunset.</p>
              <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Check dates & rooms <Icon name="arrow" size={17} /></a>
            </aside>
          </div>
        </section>

        <section className="activity-story-section" id="day-plan" aria-labelledby="day-plan-title">
          <div className="shell">
            <div className="section-heading-row activity-story-heading">
              <div>
                <p className="eyebrow">Design your day</p>
                <h2 id="day-plan-title">Pick a pace.<br /><em>Leave room for more.</em></h2>
              </div>
              <p className="section-side-copy">The best part of staying close is keeping the in-between moments: an early swim, an unhurried lunch, and a little more time outside.</p>
            </div>

            <div className="activity-story-grid">
              <article className="activity-story-feature">
                <img src="/images/activities.webp" alt="Calm white-sand bay near Green Head" />
                <div className="activity-story-overlay">
                  <span>01 · Right outside</span>
                  <h3>Swim, snorkel, repeat.</h3>
                  <p>White sand, calm water and a bay close enough to wander to before breakfast.</p>
                  <a href="#activity-list">Explore water time <Icon name="arrow" size={15} /></a>
                </div>
              </article>

              <article className="activity-story-card">
                <img src="/images/property-exterior.webp" alt="Shaded outdoor patio at Centre Break Restaurant" />
                <div className="activity-story-card-copy">
                  <span>02 · Refuel nearby</span>
                  <h3>Lunch without leaving Green Head.</h3>
                  <Link href="/jurien-bay-restaurant/">See Centre Break Restaurant <Icon name="arrow" size={15} /></Link>
                </div>
              </article>

              <article className="activity-story-card activity-story-card-welcome">
                <img src="/images/welcome.webp" alt="Welcome garden entrance at Centre Break Beach Stay" />
                <div className="activity-story-card-copy">
                  <span>03 · Come back easy</span>
                  <h3>Keep the evening slow.</h3>
                  <Link href="#stay-close">See the stay <Icon name="arrow" size={15} /></Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="activities-list-section shell section-pad-small" id="activity-list" aria-labelledby="activity-list-title">
          <div className="activities-list-heading">
            <div>
              <p className="eyebrow">Make it your own</p>
              <h2 id="activity-list-title">Choose your kind<br /><em>of day.</em></h2>
            </div>
            <p>Keep it close, make it an adventure, or let the weather decide. These local ideas are all within easy reach of your coastal base.</p>
          </div>
          <div className="activities-list">
            {activities.map((activity, index) => (
              <article className="activity-row" key={activity.title}>
                <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="activity-row-copy">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  {activity.link ? <a href={activity.link} target="_blank" rel="noreferrer">{activity.linkLabel} <Icon name="arrow" size={14} /></a> : null}
                </div>
                <Icon name="arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section className="activity-callout-section section-pad-small" aria-labelledby="more-ideas-title">
          <div className="shell activity-callout">
            <div><p className="eyebrow">A few more ideas</p><h2 id="more-ideas-title">Stay curious.</h2></div>
            <div className="activity-tags activity-tags-dark">{quickActivities.map((activity) => <span key={activity}><Icon name="check" size={14} /> {activity}</span>)}</div>
          </div>
        </section>

        <section className="stay-close-section" id="stay-close" aria-labelledby="stay-close-title">
          <div className="shell stay-close-grid">
            <div className="stay-close-visual">
              <img src="/images/room-suite.jpg" alt="Self-contained suite at Centre Break Beach Stay" />
              <div className="stay-close-badge"><Icon name="bed" size={19} /><span>Sleep close to the coast<small>Check-in from 2pm · check-out 10am</small></span></div>
            </div>
            <div className="stay-close-copy">
              <p className="eyebrow">Make more of the map</p>
              <h2 id="stay-close-title">Stay close to the<br /><em>start of your day.</em></h2>
              <p className="lead">When the bay is this close, you do not have to choose between getting out early and taking it easy. Book a room at Centre Break and give every part of the day a little more space.</p>
              <ul className="proximity-list">
                <li><Icon name="wave" size={20} /><span><strong>{business.distanceToDynamiteBay} to Dynamite Bay</strong> for an easy swim, snorkel or sunset.</span></li>
                <li><Icon name="fork" size={20} /><span><strong>Onsite restaurant</strong> for lunch, dinner and a cold drink close to home.</span></li>
                <li><Icon name="compass" size={20} /><span><strong>{business.distanceToJurienBay} to Jurien Bay</strong> when you want to make the day bigger.</span></li>
              </ul>
              <div className="inline-link-row">
                <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Icon name="arrow" size={17} /></a>
                <Link className="text-link" href="/jurien-bay-accommodation/">View all rooms <Icon name="arrow" size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner"><div><p className="eyebrow eyebrow-light">Ready when you are</p><h2>Come for the coast.<br /><em>Stay for the quiet.</em></h2></div><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <Icon name="arrow" size={17} /></a></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
