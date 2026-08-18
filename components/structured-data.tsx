import { business, menuUrl, restaurantHours, siteUrl } from "../lib/content";

type StructuredDataProps = {
  page: "home" | "accommodation" | "restaurant";
};

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const absoluteUrl = (path: string) => (path.startsWith("http") ? path : `${siteUrl}${path}`);

export function StructuredData({ page }: StructuredDataProps) {
  const hotel = {
    "@type": "Hotel",
    "@id": `${siteUrl}/#hotel`,
    name: business.name,
    url: siteUrl,
    description:
      "Centre Break Beach Stay is accommodation in Green Head, 15 minutes from Jurien Bay and 50 metres from Dynamite Bay.",
    image: [
      absoluteUrl("/images/property-exterior.webp"),
      absoluteUrl("/images/welcome.webp"),
      absoluteUrl("/images/activities.webp"),
    ],
    logo: absoluteUrl("/images/centrebreak-logo.webp"),
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    checkinTime: business.checkIn,
    checkoutTime: business.checkOut,
    hasMap: business.directionsUrl,
    sameAs: business.sameAs,
  };

  const restaurant = {
    "@type": "Restaurant",
    "@id": `${siteUrl}/jurien-bay-restaurant/#restaurant`,
    name: business.restaurantName,
    url: `${siteUrl}/jurien-bay-restaurant/`,
    description:
      "A public, licensed restaurant and café at Centre Break Beach Stay in Green Head, 15 minutes from Jurien Bay.",
    image: [absoluteUrl("/images/crayfish.webp"), absoluteUrl("/images/property-patio.jpg")],
    logo: absoluteUrl("/images/centrebreak-logo.webp"),
    telephone: business.telephone,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    menu: menuUrl,
    servesCuisine: ["Seafood"],
    openingHoursSpecification: restaurantHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: daysOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    parentOrganization: { "@id": `${siteUrl}/#hotel` },
    sameAs: business.sameAs,
  };

  const graph = page === "restaurant" ? [hotel, restaurant] : [hotel];
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}
