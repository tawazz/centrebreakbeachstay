import Link from "next/link";
import { Gallery } from "../components/gallery";
import { Icon } from "../components/icon";
import { MapEmbed } from "../components/map-embed";
import { RoomCard } from "../components/room-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { StructuredData } from "../components/structured-data";
import {
  activities,
  bookingUrl,
  business,
  menuUrl,
  quickActivities,
  restaurantHours,
  rooms,
} from "../lib/content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <StructuredData page="home" />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src="/images/activities.webp" alt="White sand and turquoise water near Jurien Bay and Green Head" fetchPriority="high" />
          <div className="hero-overlay" />
          <div className="shell hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="wave" size={16} /> Jurien Bay area · Green Head</p>
            <h1 id="hero-title">Jurien Bay accommodation<br /><em>by the sea.</em></h1>
            <p className="hero-copy">Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with comfortable rooms for couples and families.</p>
            <div className="hero-actions">
              <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer" data-booking-placement="home-hero">Check dates & rates <Icon name="arrow" size={17} /></a>
              <Link className="button button-ghost" href="/jurien-bay-accommodation/">Explore rooms</Link>
            </div>
            <p className="booking-helper">Live availability opens in our booking partner.</p>
          </div>
          <div className="hero-note"><span>50m</span><small>to Dynamite Bay</small></div>
        </section>

        <section className="intro-section shell section-pad" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow">Stay near Jurien Bay</p>
            <h2 id="intro-title">A simple place to <em>disappear.</em></h2>
            <p className="lead">Centre Break Beach Stay is in Green Head, around {business.distanceToJurienBay} from Jurien Bay and just {business.distanceToDynamiteBay} from Dynamite Bay.</p>
            <p>Choose from ensuite queen, family, and self-contained rooms. Centre Break Restaurant is onsite for licensed lunch and dinner when you would rather stay close to the water.</p>
            <Link className="text-link" href="/jurien-bay-accommodation/">See Jurien Bay accommodation <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="intro-image-wrap">
            <img src="/images/welcome.webp" alt="Welcome garden entrance at Centre Break Beach Stay" />
            <div className="image-caption"><Icon name="spark" size={15} /> Make room for a slower pace</div>
          </div>
        </section>

        <section className="gallery-section shell section-pad-small" aria-label="Property gallery">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">The stay</p>
              <h2>Come as you are.</h2>
            </div>
            <p className="section-side-copy">Rooms to suit a quick Jurien Bay coastal escape, an easy family holiday, or a few extra days of doing absolutely nothing.</p>
          </div>
          <Gallery />
        </section>

        <section className="room-section" id="roomsrates" aria-labelledby="rooms-title">
          <div className="shell section-pad">
            <div className="section-heading section-heading-row rooms-heading">
              <div>
                <p className="eyebrow">Jurien Bay accommodation · rooms & availability</p>
                <h2 id="rooms-title">Choose your<br /><em>room.</em></h2>
              </div>
              <div className="room-heading-aside">
                <p>Compare room size, bedding, bathroom access, and amenities here. Choose your dates and guests to see current rates through our booking partner.</p>
                <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer" data-booking-placement="home-rooms-heading">Check dates & rates <Icon name="arrow" size={17} /></a>
              </div>
            </div>
            <div className="room-grid">
              {rooms.map((room, index) => <RoomCard room={room} index={index} key={`${room.name}-${room.eyebrow}`} />)}
            </div>
          </div>
        </section>

        <section className="food-section section-pad" id="menu" aria-labelledby="food-title">
          <div className="shell food-layout">
            <div className="food-image-grid">
              <img className="food-image-main" src="/images/crayfish.webp" alt="Local seafood served at Centre Break Restaurant near Jurien Bay" />
              <img className="food-image-small" src="/images/property-patio.jpg" alt="Outdoor café patio" />
              <span className="food-stamp">Eat<br /><em>local.</em></span>
            </div>
            <div className="food-copy">
              <p className="eyebrow">Restaurant near Jurien Bay</p>
              <h2 id="food-title">Centre Break<br /><em>Restaurant.</em></h2>
              <p className="lead">Local seafood, easy lunches, hearty dinners, and an ice-cold drink without needing to get back in the car.</p>
              <p>Centre Break Restaurant is a public, onsite licensed restaurant and café in Green Head, around 15 minutes from Jurien Bay. Pull up a chair and enjoy the view from our shaded patio.</p>
              <div className="hours-card">
                {restaurantHours.map((hours) => <div key={hours.label}><span className="hours-label">{hours.label}</span><strong>{hours.display}</strong></div>)}
              </div>
              <div className="inline-link-row">
                <a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">View the menu <Icon name="arrow" size={16} /></a>
                <Link className="text-link" href="/jurien-bay-restaurant/">Restaurant details <Icon name="arrow" size={16} /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="activity-section" id="activities" aria-labelledby="activities-title">
          <div className="activity-visual">
            <img src="/images/activities.webp" alt="Turquoise water and white sand near Jurien Bay and Green Head" />
            <div className="activity-visual-copy"><span>Things to do near Jurien Bay</span><strong>Out here,<br /><em>the day is yours.</em></strong></div>
          </div>
          <div className="shell section-pad activity-content">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">Things to do near Jurien Bay</p>
                <h2 id="activities-title">Go on,<br /><em>get outside.</em></h2>
              </div>
              <div className="activity-heading-aside"><p>Visiting Jurien Bay? Green Head is 15 minutes away, with white sandy beaches, sheltered coves, offshore islands, and wildflowers inland.</p><Link className="text-link" href="/activities/">Things to do near Jurien Bay <Icon name="arrow" size={16} /></Link></div>
            </div>
            <div className="activity-feature-grid">
              {activities.slice(0, 4).map((activity, index) => (
                <article className="activity-feature" key={activity.title}>
                  <span className="activity-index">0{index + 1}</span>
                  <div><h3>{activity.title}</h3><p>{activity.description}</p>{activity.link ? <a href={activity.link} target="_blank" rel="noreferrer">{activity.linkLabel} <Icon name="arrow" size={14} /></a> : null}</div>
                </article>
              ))}
            </div>
            <div className="activity-tags" aria-label="More local activities">
              {quickActivities.map((activity) => <span key={activity}><Icon name="check" size={14} /> {activity}</span>)}
            </div>
          </div>
        </section>

        <section className="location-section section-pad" id="location" aria-labelledby="location-title">
          <div className="shell location-layout">
            <div className="location-copy">
              <p className="eyebrow">Find us</p>
              <h2 id="location-title">A coastal base<br /><em>near Jurien Bay.</em></h2>
              <p className="lead">Green Head is a quaint fishing village two hours north of Perth and 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              <div className="location-details">
                <div><Icon name="pin" size={20} /><span><strong>{business.name}</strong>{business.address.streetAddress}<br />{business.address.addressLocality} {business.address.addressRegion} {business.address.postalCode}</span></div>
                <div><Icon name="calendar" size={20} /><span><strong>Check-in / check-out</strong>{business.checkInLabel} · {business.checkOutLabel}</span></div>
              </div>
              <a className="button button-dark" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions <Icon name="arrow" size={17} /></a>
            </div>
            <MapEmbed directionsUrl={business.directionsUrl} mapUrl={business.mapUrl} />
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner">
            <div><p className="eyebrow eyebrow-light">Ready when you are</p><h2>Stay near Jurien Bay.<br /><em>Make a little space.</em></h2></div>
            <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer" data-booking-placement="home-footer-cta">Check dates & rates <Icon name="arrow" size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
