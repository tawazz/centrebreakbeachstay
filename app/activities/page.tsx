import Link from "next/link";
import { Icon } from "../../components/icon";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { activities, bookingUrl, quickActivities } from "../../lib/content";

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero activity-page-hero" aria-labelledby="page-title">
          <img src="/images/activities.webp" alt="White sand and turquoise water near Green Head" />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="compass" size={16} /> Green Head, WA</p>
            <h1 id="page-title">Make a day<br /><em>of it.</em></h1>
            <p>From sea lions and wildflowers to quiet coves and long coastal walks, there is always another good reason to head outside.</p>
          </div>
        </section>

        <section className="activities-intro shell section-pad-small">
          <p className="eyebrow">Activities</p>
          <h2>Small town.<br /><em>Big outdoors.</em></h2>
          <p className="lead">Situated on a headland, Green Head’s bays of white sandy beaches are made for swimming and snorkelling. Offshore islands and reefs are perfect for fishing and scuba diving, while inland areas come alive with wildflowers in spring.</p>
        </section>

        <section className="activities-list-section shell section-pad-small">
          <div className="activities-list">
            {activities.map((activity, index) => (
              <article className="activity-row" key={activity.title}>
                <span className="activity-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="activity-row-copy"><h3>{activity.title}</h3><p>{activity.description}</p>{activity.link ? <a href={activity.link} target="_blank" rel="noreferrer">{activity.linkLabel} <Icon name="arrow" size={14} /></a> : null}</div>
                <Icon name="arrow" size={20} />
              </article>
            ))}
          </div>
        </section>

        <section className="activity-callout-section section-pad-small">
          <div className="shell activity-callout">
            <div><p className="eyebrow">A few more ideas</p><h2>Stay curious.</h2></div>
            <div className="activity-tags activity-tags-dark">{quickActivities.map((activity) => <span key={activity}><Icon name="check" size={14} /> {activity}</span>)}</div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner"><div><p className="eyebrow eyebrow-light">Base yourself here</p><h2>Come for the coast.<br /><em>Stay for the quiet.</em></h2></div><a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <Icon name="arrow" size={17} /></a></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
