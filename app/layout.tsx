import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centre Break Beach Stay | Green Head, Western Australia",
  description:
    "A relaxed coastal stay 50 metres from Dynamite Bay in Green Head, Western Australia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
