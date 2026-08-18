import Link from "next/link";
import { bookingUrl, menuUrl, termsUrl } from "../lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Centre Break Beach Stay home">
            <img src="/images/centrebreak-logo.webp" alt="Centre Break Beach Stay" />
          </Link>
          <p>Slow mornings, salt air, and a comfortable base beside Dynamite Bay.</p>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <Link href="/#roomsrates">Rooms & rates</Link>
          <Link href="/activities/">Activities</Link>
          <Link href="/#menu">Food & drink</Link>
          <Link href="/#location">Find us</Link>
        </div>

        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href="tel:+61899531896">(08) 9953 1896</a>
          <a href="mailto:info@centrebreakbeachstay.com.au">Email us</a>
          <a href="https://www.instagram.com/centrebreakbeachstay/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/centrebreak" target="_blank" rel="noreferrer">Facebook</a>
        </div>

        <div className="footer-column footer-hours">
          <p className="footer-label">Open 7 days</p>
          <p>Restaurant<br />11am–2pm<br />5–7pm</p>
          <a className="footer-booking" href={bookingUrl} target="_blank" rel="noreferrer">Check availability <span>↗</span></a>
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
