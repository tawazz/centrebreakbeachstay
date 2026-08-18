import { business, greenHeadFaqs, menuUrl, restaurantHours, siteUrl } from "../lib/content";

type StructuredDataProps = {
  page: "home" | "accommodation" | "restaurant" | "green-head";
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

  const destination = {
    "@type": "TouristDestination",
    "@id": `${siteUrl}/green-head/#destination`,
    name: "Green Head",
    url: `${siteUrl}/green-head/`,
    description:
      "Green Head is a relaxed Turquoise Coast destination with sheltered beaches, coastal walks, sea lion tours, fishing, wildflowers and nearby nature escapes.",
    image: [absoluteUrl("/images/activities.webp"), absoluteUrl("/images/welcome.webp")],
    touristType: ["Beach lovers", "Families", "Nature lovers", "Road trippers"],
    containedInPlace: {
      "@type": "Place",
      name: "Turquoise Coast",
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Green Head",
        item: `${siteUrl}/green-head/`,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${siteUrl}/green-head/#faq`,
    mainEntity: greenHeadFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph =
    page === "restaurant"
      ? [hotel, restaurant]
      : page === "green-head"
        ? [hotel, restaurant, destination, breadcrumb, faq]
        : [hotel];
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
    /</g,
    "\\u003c",
  );

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}
