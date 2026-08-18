import Link from "next/link";
import { Gallery } from "../components/gallery";
import { Icon } from "../components/icon";
import { RoomCard } from "../components/room-card";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { activities, bookingUrl, menuUrl, quickActivities, rooms } from "../lib/content";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src="/images/activities.webp" alt="White sand and turquoise water near Centre Break Beach Stay" />
          <div className="hero-overlay" />
          <div className="shell hero-content">
            <p className="eyebrow eyebrow-light"><Icon name="wave" size={16} /> Green Head · Western Australia</p>
            <h1 id="hero-title">A little more<br /><em>time by the sea.</em></h1>
            <p className="hero-copy">A relaxed coastal base beside Dynamite Bay, made for slow mornings, salty afternoons, and weekends that feel longer than they are.</p>
            <div className="hero-actions">
              <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book your stay <Icon name="arrow" size={17} /></a>
              <a className="button button-ghost" href="#roomsrates">Explore rooms</a>
            </div>
          </div>
          <div className="hero-note"><span>50m</span><small>to Dynamite Bay</small></div>
        </section>

        <section className="intro-section shell section-pad" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow">Welcome to Centre Break</p>
            <h2 id="intro-title">A simple place to <em>disappear.</em></h2>
            <p className="lead">Centre Break Beach Stay sits just fifty metres from the aptly named Dynamite Bay — close enough to hear the ocean, far enough to feel away from it all.</p>
            <p>Choose from self-contained apartments, ensuite queen or twin rooms, and family-friendly spaces. There is a licensed café on site for hearty breakfasts, tasty lunches, and dinner when you would rather stay close to the water.</p>
            <Link className="text-link" href="#location">See where we are <Icon name="arrow" size={16} /></Link>
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
            <p className="section-side-copy">Rooms to suit a quick coastal escape, an easy family holiday, or a few extra days of doing absolutely nothing.</p>
          </div>
          <Gallery />
        </section>

        <section className="room-section" id="roomsrates" aria-labelledby="rooms-title">
          <div className="shell section-pad">
            <div className="section-heading section-heading-row rooms-heading">
              <div>
                <p className="eyebrow">Rooms & rates</p>
                <h2 id="rooms-title">Find your kind<br /><em>of comfortable.</em></h2>
              </div>
              <div className="room-heading-aside">
                <p>Every room includes Wi-Fi, air conditioning, TV, and the essentials for a good night’s sleep. Check current rates and availability through our secure booking partner.</p>
                <a className="button button-dark" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <Icon name="arrow" size={17} /></a>
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
              <img className="food-image-main" src="/images/crayfish.webp" alt="Local crayfish served with salad" />
              <img className="food-image-small" src="/images/property-patio.jpg" alt="Outdoor café patio" />
              <span className="food-stamp">Eat<br /><em>local.</em></span>
            </div>
            <div className="food-copy">
              <p className="eyebrow">Food & drink</p>
              <h2 id="food-title">Stay for<br /><em>another round.</em></h2>
              <p className="lead">Local seafood, easy lunches, hearty dinners, and an ice-cold drink without needing to get back in the car.</p>
              <p>Our onsite licensed café is open for breakfast, lunch, and dinner. Pull up a chair, let the day stretch out, and enjoy the view from our shaded patio.</p>
              <div className="hours-card">
                <div><span className="hours-label">Restaurant</span><strong>11am–2pm</strong></div>
                <div><span className="hours-label">Dinner</span><strong>5–7pm</strong></div>
              </div>
              <a className="text-link" href={menuUrl} target="_blank" rel="noreferrer">View the menu <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </section>

        <section className="activity-section" id="activities" aria-labelledby="activities-title">
          <div className="activity-visual">
            <img src="/images/activities.webp" alt="Turquoise water and white sand at Green Head" />
            <div className="activity-visual-copy"><span>Indian Ocean Drive</span><strong>Out here,<br /><em>the day is yours.</em></strong></div>
          </div>
          <div className="shell section-pad activity-content">
            <div className="section-heading section-heading-row">
              <div>
                <p className="eyebrow">Things to do</p>
                <h2 id="activities-title">Go on,<br /><em>get outside.</em></h2>
              </div>
              <div className="activity-heading-aside"><p>White sandy beaches, sheltered coves, offshore islands, and wildflowers inland. Green Head is a small place with plenty to fill a day.</p><Link className="text-link" href="/activities/">See all activities <Icon name="arrow" size={16} /></Link></div>
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
              <h2 id="location-title">Right where<br /><em>you want to be.</em></h2>
              <p className="lead">Green Head is a quaint fishing village two hours north of Perth and 15 minutes from Jurien Bay along Indian Ocean Drive.</p>
              <div className="location-details">
                <div><Icon name="pin" size={20} /><span><strong>Centre Break Beach Stay</strong>1 Green Head Road<br />Green Head WA 6514</span></div>
                <div><Icon name="calendar" size={20} /><span><strong>Check-in / check-out</strong>From 2pm · Until 10am</span></div>
              </div>
              <a className="button button-dark" href="https://www.google.com/maps/dir/?api=1&destination=Centre+Break+Beach+Stay,+1+Green+Head+Road,+Green+Head+WA+6514" target="_blank" rel="noreferrer">Get directions <Icon name="arrow" size={17} /></a>
            </div>
            <div className="map-card">
              <iframe title="Map showing Centre Break Beach Stay in Green Head" src="https://www.google.com/maps?q=Centre+Break+Beach+Stay,+1+Green+Head+Road,+Green+Head+WA+6514&output=embed" loading="lazy" />
              <div className="map-badge"><Icon name="pin" size={16} /><span>50 metres<br /><small>from Dynamite Bay</small></span></div>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="shell booking-inner">
            <div><p className="eyebrow eyebrow-light">Ready when you are</p><h2>Make a little<br /><em>space for yourself.</em></h2></div>
            <a className="button button-light" href={bookingUrl} target="_blank" rel="noreferrer">Book Centre Break <Icon name="arrow" size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
