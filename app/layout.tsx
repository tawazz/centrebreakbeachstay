import type { Metadata } from "next";
import "./globals.css";
import { assetPath, siteUrl } from "../lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jurien Bay Accommodation Near Dynamite Bay | Centre Break Beach Stay",
    template: "%s | Centre Break Beach Stay",
  },
  description:
    "Looking for Jurien Bay accommodation? Stay at Centre Break Beach Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    siteName: "Centre Break Beach Stay",
    title: "Jurien Bay Accommodation Near Dynamite Bay | Centre Break Beach Stay",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay, with comfortable rooms and onsite dining.",
    images: ["/images/property-exterior.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jurien Bay Accommodation Near Dynamite Bay | Centre Break Beach Stay",
    description:
      "Stay in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay.",
    images: ["/images/property-exterior.webp"],
  },
  icons: {
    icon: assetPath("/images/centrebreak-logo.webp"),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
