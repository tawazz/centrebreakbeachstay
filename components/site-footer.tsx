import Link from "next/link";
import { bookingUrl, business, menuUrl, restaurantHours, termsUrl } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Centre Break Beach Stay home">
            <img src="/images/centrebreak-logo.webp" alt="Centre Break Beach Stay" />
          </Link>
          <p>Accommodation near Jurien Bay in Green Head, 50 metres from Dynamite Bay.</p>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/green-head/">Green Head guide</Link>
          <Link href="/jurien-bay-accommodation/">Jurien Bay accommodation</Link>
          <Link href="/activities/">Activities</Link>
          <Link href="/jurien-bay-restaurant/">Restaurant near Jurien Bay</Link>
          <Link href="/#location">Find us</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href={`tel:${business.telephone}`}>{business.displayPhone}</a>
          <a href={`mailto:${business.email}`}>Email us</a>
          <p>{business.address.streetAddress}<br />{business.address.addressLocality} {business.address.addressRegion} {business.address.postalCode}</p>
          <a href="https://www.instagram.com/centrebreakbeachstay/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/centrebreak" target="_blank" rel="noreferrer">Facebook</a>
        </div>

        <div className="footer-column footer-hours">
          <p className="footer-label">Open 7 days</p>
          <p>{business.restaurantName}<br />{restaurantHours[0].display}<br />{restaurantHours[1].display}</p>
          <a className="footer-booking" href={bookingUrl} target="_blank" rel="noreferrer" data-booking-placement="footer">Check dates & rates <span>↗</span></a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© Centre Break Beach Stay 2026</p>
        <div>
          <a href={termsUrl} target="_blank" rel="noreferrer">Terms & conditions</a>
          <a href={menuUrl} target="_blank" rel="noreferrer">Menu PDF</a>
        </div>
      </div>
    </footer>
  );
}
