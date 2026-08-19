import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "../../components/icon";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { StructuredData } from "../../components/structured-data";
import { assetPath, business, menuUrl, restaurantHours } from "../../lib/content";

export const metadata: Metadata = {
  title: "Restaurant Near Jurien Bay",
  description:
    "Looking for a restaurant near Jurien Bay? Centre Break Restaurant in Green Head serves licensed lunch and dinner seven days a week, 15 minutes from Jurien Bay.",
  alternates: {
    canonical: "/jurien-bay-restaurant/",
  },
  openGraph: {
    title: "Restaurant Near Jurien Bay | Centre Break Restaurant",
    description:
      "Enjoy local seafood, lunch, dinner and a drink at Centre Break Restaurant in Green Head, 15 minutes from Jurien Bay.",
    url: "/jurien-bay-restaurant/",
    images: ["/images/crayfish.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Near Jurien Bay | Centre Break Restaurant",
    description:
      "Enjoy local seafood, lunch, dinner and a drink at Centre Break Restaurant in Green Head, 15 minutes from Jurien Bay.",
    images: ["/images/crayfish.webp"],
  },
};

export default function JurienBayRestaurantPage() {
  return (
    <>
      <SiteHeader />
      <StructuredData page="restaurant" />
      <main>
        <section className="page-hero restaurant-page-hero" aria-labelledby="page-title">
          <img src={assetPath("/images/crayfish.webp")} alt="Local seafood at Centre Break Restaurant near Jurien Bay" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="shell page-hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="fork" size={16} /> Restaurant near Jurien Bay · Green Head</p>
            <h1 id="page-title">Restaurant near Jurien Bay<br /><em>in Green Head.</em></h1>
            <p>Centre Break Restaurant is a public, licensed restaurant and café at Centre Break Beach Stay, around 15 minutes from Jurien Bay.</p>
            <div className="hero-actions">
              <a className="button button-light" href={assetPath(menuUrl)} target="_blank" rel="noreferrer">View the menu <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions</a>
            </div>
          </div>
        </section>

        <section className="answer-section section-pad-small" aria-labelledby="restaurant-answer-title">
          <div className="shell answer-layout">
            <div className="answer-copy">
              <p className="eyebrow">A place to eat near Jurien Bay</p>
              <h2 id="restaurant-answer-title">Looking for somewhere to eat?</h2>
              <p className="lead">Make the short drive from Jurien Bay to Green Head for local seafood, easy lunches, hearty dinners and a cold drink beside Dynamite Bay.</p>
              <p>Centre Break Restaurant is onsite at Centre Break Beach Stay and open to the public. Pull up a chair on the shaded patio after a day of swimming, fishing, sea lion tours or exploring the coast.</p>
              <div className="inline-link-row">
                <a className="text-link" href={assetPath(menuUrl)} target="_blank" rel="noreferrer">Read the menu <Icon name="arrow" size={16} /></a>
                <Link className="text-link" href="/jurien-bay-accommodation/">Stay near Jurien Bay <Icon name="arrow" size={16} /></Link>
              </div>
            </div>
            <div className="restaurant-hours-card" aria-label="Centre Break Restaurant opening hours">
              <p className="eyebrow">Open 7 days</p>
              <h3>Restaurant hours</h3>
              {restaurantHours.map((hours) => <div className="restaurant-hours-row" key={hours.label}><span>{hours.label}</span><strong>{hours.display}</strong></div>)}
              <p className="hours-note">Hours can change, so check the menu or call ahead before travelling.</p>
            </div>
          </div>
        </section>

        <section className="food-section section-pad restaurant-detail-section" aria-labelledby="restaurant-details-title">
          <div className="shell food-layout">
            <div className="food-image-grid">
              <img className="food-image-main" src={assetPath("/images/crayfish.webp")} alt="Seafood meal at Centre Break Restaurant" />
              <img className="food-image-small" src={assetPath("/images/property-patio.jpg")} alt="Shaded patio at Centre Break Restaurant" />
              <span className="food-stamp">Eat<br /><em>local.</em></span>
            </div>
            <div className="food-copy">
              <p className="eyebrow">Lunch, dinner & drinks</p>
              <h2 id="restaurant-details-title">Make a stop<br /><em>of your day.</em></h2>
              <p className="lead">You do not need to be staying overnight to visit Centre Break Restaurant.</p>
              <p>Come in from the Jurien Bay area for a relaxed meal in Green Head. The restaurant is licensed and serves lunch from 11am–2pm and dinner from 5pm–7pm, seven days a week.</p>
              <div className="restaurant-contact-card">
                <strong>{business.restaurantName}</strong>
                <span>{business.address.streetAddress}<br />{business.address.addressLocality} {business.address.addressRegion} {business.address.postalCode}</span>
                <a href={`tel:${business.telephone}`}>{business.displayPhone}</a>
              </div>
              <a className="button button-dark" href={business.directionsUrl} target="_blank" rel="noreferrer">Plan your visit <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad-small" aria-labelledby="restaurant-faq-title">
          <div className="shell faq-layout">
            <div>
              <p className="eyebrow">Frequently asked</p>
              <h2 id="restaurant-faq-title">Before you<br /><em>head our way.</em></h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>Is Centre Break Restaurant open to the public?</summary>
                <p>Yes. Centre Break Restaurant is open to the public and is located at Centre Break Beach Stay in Green Head.</p>
              </details>
              <details className="faq-item">
                <summary>How far is the restaurant from Jurien Bay?</summary>
                <p>Centre Break Restaurant is around 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              </details>
              <details className="faq-item">
                <summary>What are the restaurant hours?</summary>
                <p>The current hours are 11am–2pm for lunch and 5pm–7pm for dinner, seven days a week. Check the menu or call ahead for the latest information.</p>
              </details>
              <details className="faq-item">
                <summary>Where can I find the menu?</summary>
                <p><a href={assetPath(menuUrl)} target="_blank" rel="noreferrer">View the Centre Break Restaurant menu</a> before travelling.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner">
            <div><p className="eyebrow eyebrow-light">Stay close to dinner</p><h2>Come for the coast.<br /><em>Stay for another round.</em></h2></div>
            <Link className="button button-light" href="/jurien-bay-accommodation/">Explore accommodation <Icon name="arrow" size={17} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
