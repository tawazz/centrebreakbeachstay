"use client";

import { useState } from "react";
import Link from "next/link";
import { bookingUrl } from "../lib/content";
import { Icon } from "./icon";

const links = [
  { label: "Stay", href: "/#roomsrates" },
  { label: "Activities", href: "/activities/" },
  { label: "Food & drink", href: "/#menu" },
  { label: "Find us", href: "/#location" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Centre Break Beach Stay home" onClick={() => setOpen(false)}>
          <img src="/images/centrebreak-logo.webp" alt="Centre Break Beach Stay" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
          <a className="button button-small" href={bookingUrl} target="_blank" rel="noreferrer">
            Book now <Icon name="arrow" size={16} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <Icon name={open ? "x" : "menu"} size={24} />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
          <a className="button" href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Book your stay <Icon name="arrow" size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
