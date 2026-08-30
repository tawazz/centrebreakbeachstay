export const siteUrl = "https://centrebreakbeachstay.com.au";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetPath = (path: string) =>
  path.startsWith("http://") || path.startsWith("https://") ? path : `${publicBasePath}${path}`;

const bookingBaseUrl = "https://us2.cloudbeds.com/reservation/sqAH3Y";
export const bookingUrl = `${bookingBaseUrl}?currency=aud`;
export const menuUrl = "/documents/menu.pdf";
export const termsUrl = "/documents/terms-and-conditions.pdf";

export const heroSlides = [
  {
    src: "/images/hero-centre-break-02.jpg",
    alt: "Dynamite Bay with clear turquoise water and white sand near Green Head",
    label: "Dynamite Bay · 50 metres away",
    title: "Blue-water mornings.",
  },
  {
    src: "/images/hero-centre-break-01.jpg",
    alt: "Shaded outdoor dining patio at Centre Break Beach Stay",
    label: "Onsite restaurant & café",
    title: "Stay for another plate.",
  },
  {
    src: "/images/hero-centre-break-06.jpg",
    alt: "Centre Break Beach Stay building with balconies in Green Head",
    label: "Centre Break Beach Stay",
    title: "Your coastal base in Green Head.",
  },
  {
    src: "/images/hero-centre-break-07.jpg",
    alt: "Handmade welcome sign at the entrance to Centre Break Beach Stay",
    label: "Welcome to Green Head",
    title: "Arrive curious. Leave lighter.",
  },
  {
    src: "/images/hero-centre-break-04.jpg",
    alt: "Dynamite Bay direction sign under a clear blue sky",
    label: "Dynamite Bay",
    title: "The bay is just down the road.",
  },
  {
    src: "/images/hero-centre-break-03.jpg",
    alt: "Centre Break Beach Stay sign mounted on the property exterior",
    label: "A stay with its own rhythm",
    title: "Make room for a slower pace.",
  },
  {
    src: "/images/hero-front-desk-02.jpg",
    alt: "Front desk and welcome area at Centre Break Beach Stay",
    label: "Reception",
    title: "A warm welcome, from check-in.",
  },
  {
    src: "/images/hero-front-desk-01.jpg",
    alt: "Guest lounge with coastal cushions and local brochures",
    label: "Guest lounge",
    title: "Slow afternoons start here.",
  },
  {
    src: "/images/hero-front-desk-03.jpg",
    alt: "Breakfast buffet prepared at Centre Break Restaurant",
    label: "Centre Break Restaurant",
    title: "Breakfast, lunch, dinner.",
  },
  {
    src: "/images/hero-front-desk-04.jpg",
    alt: "Restaurant dining room with tables ready for guests",
    label: "Restaurant dining",
    title: "Come in from the salt air.",
  },
  {
    src: "/images/hero-front-desk-05.jpg",
    alt: "Long dining table set at Centre Break Restaurant",
    label: "Gather around the table",
    title: "Good food stays local.",
  },
] as const;

export const business = {
  name: "Centre Break Beach Stay",
  restaurantName: "Centre Break Restaurant",
  telephone: "+61899531896",
  displayPhone: "(08) 9953 1896",
  email: "info@centrebreakbeachstay.com.au",
  address: {
    streetAddress: "1 Green Head Road",
    addressLocality: "Green Head",
    addressRegion: "WA",
    postalCode: "6514",
    addressCountry: "AU",
  },
  distanceToJurienBay: "15 minutes",
  distanceToDynamiteBay: "50 metres",
  checkIn: "14:00",
  checkOut: "10:00",
  checkInLabel: "From 2pm",
  checkOutLabel: "Until 10am",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Centre+Break+Beach+Stay,+1+Green+Head+Road,+Green+Head+WA+6514",
  mapUrl:
    "https://www.google.com/maps?q=Centre+Break+Beach+Stay,+1+Green+Head+Road,+Green+Head+WA+6514&output=embed",
  sameAs: [
    "https://www.instagram.com/centrebreakbeachstay/",
    "https://www.facebook.com/centrebreak",
  ],
} as const;

export const restaurantHours = [
  { label: "Lunch", display: "11am–2pm", opens: "11:00", closes: "14:00" },
  { label: "Dinner", display: "5pm–7pm", opens: "17:00", closes: "19:00" },
] as const;

export type Room = {
  name: string;
  eyebrow: string;
  image: string;
  description: string;
  sleeps: string;
  beds: string;
  features: string[];
  bookingUrl: string;
};

const roomBookingUrl = (roomId: string) => `${bookingBaseUrl}?rid=${roomId}&currency=aud`;

export const rooms: Room[] = [
  {
    name: "Budget Double Room",
    eyebrow: "Shared bathroom",
    image: "/images/room-budget-bright.webp",
    description:
      "A comfortable queen room with tea and coffee facilities, air conditioning, TV, and shared bathroom access for an easy overnight stay.",
    sleeps: "2 guests",
    beds: "1 queen bed",
    features: ["A/C", "Wi-Fi", "TV", "Shared bathroom", "Towels"],
    bookingUrl: roomBookingUrl("62357956051080"),
  },
  {
    name: "Ensuite Double Room",
    eyebrow: "Ocean views or deck",
    image: "/images/room-ensuite-double-bright.webp",
    description:
      "A bright modern room with a queen bed, ensuite bathroom, air conditioning, flat-screen TV, tea and coffee, and the option of ocean views or a private deck.",
    sleeps: "2 guests",
    beds: "1 queen bed",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Towels"],
    bookingUrl: roomBookingUrl("63550677651593"),
  },
  {
    name: "1-bedroom self-contained suite",
    eyebrow: "Sleeps 3 · views to Dynamite Bay",
    image: "/images/room-suite-bright-v2.webp",
    description:
      "A home away from home for a couple or small family, with a queen bed, single bed, ensuite bathroom, kitchenette, TV, and balcony access.",
    sleeps: "3 guests",
    beds: "1 queen + 1 single",
    features: ["Kitchenette", "A/C", "Wi-Fi", "TV", "Balcony"],
    bookingUrl: roomBookingUrl("63560894251205"),
  },
  {
    name: "Family Room",
    eyebrow: "Private bathroom next door",
    image: "/images/room-family-bright.webp",
    description:
      "A downstairs family room with a queen bed and bunk bed, coffee-making facilities, TV, and a private bathroom and toilet located next door.",
    sleeps: "4 guests",
    beds: "1 queen + 2 bunks",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Towels"],
    bookingUrl: roomBookingUrl("63560385978501"),
  },
  {
    name: "Family ensuite unit",
    eyebrow: "Sleeps 5 · 2 rooms · deck access",
    image: "/images/room-family-ensuite-bright.webp",
    description:
      "Two connected rooms with two queen beds and a single bed, ensuite bathroom, air conditioning, flat-screen TV, tea and coffee, and access to the deck.",
    sleeps: "5 guests",
    beds: "2 queens + 1 single",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Deck"],
    bookingUrl: roomBookingUrl("63557503402199"),
  },
  {
    name: "2-bedroom self-contained suite",
    eyebrow: "Sleeps 6 · ocean views",
    image: "/images/room-two-bedroom-bright.webp",
    description:
      "A spacious family setup with a queen room and a bunk room, full kitchenette, air conditioning, ensuite bathroom, balcony access, and ocean views.",
    sleeps: "6 guests",
    beds: "1 queen + 4 singles",
    features: ["Kitchen", "A/C", "Wi-Fi", "TV", "Ocean views"],
    bookingUrl: roomBookingUrl("63563852673161"),
  },
];

export const accommodationFaqs = [
  {
    question: "Is Centre Break Beach Stay in Jurien Bay?",
    answer:
      "Centre Break Beach Stay is in Green Head, around 15 minutes from Jurien Bay along Indian Ocean Drive.",
  },
  {
    question: "How long is the drive from Centre Break to Jurien Bay?",
    answer:
      "Allow around 15 minutes by car from Centre Break Beach Stay in Green Head to Jurien Bay.",
  },
  {
    question: "How close is the beach?",
    answer: "Dynamite Bay is approximately 50 metres from Centre Break Beach Stay.",
  },
  {
    question: "Which rooms suit couples, families and groups?",
    answer:
      "Double rooms suit two guests, the 1-bedroom suite sleeps three, family rooms sleep four or five, and the 2-bedroom self-contained suite sleeps up to six guests.",
  },
  {
    question: "Do all rooms have a private bathroom?",
    answer:
      "Bathroom arrangements vary by room. The Budget Double Room has shared bathroom access, the Family Room has a private bathroom next door, and the other listed room options include an ensuite.",
  },
  {
    question: "Is there food onsite?",
    answer:
      "Centre Break Restaurant is open to the public seven days a week for lunch from 11am–2pm and dinner from 5pm–7pm.",
  },
] as const;

export type Activity = {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

export const activities: Activity[] = [
  {
    title: "Sea lions",
    description: "Take a tour to see the Australian sea lions thriving around Green Head’s coastal islands.",
    link: "https://www.sealioncharters.com.au/",
    linkLabel: "Sea Lion Charters",
  },
  {
    title: "Wildflowers",
    description: "Spring turns the inland country into a colour-filled reason to slow down and explore.",
    link: "http://wildflowercountry.com.au/destinations/green-head-leeman",
    linkLabel: "Explore wildflower country",
  },
  {
    title: "Osprey watching",
    description: "Look up along the coastline near Centre Break — Green Head is home to numerous wild ospreys.",
  },
  {
    title: "Three Bays Walkway",
    description: "A 2.5 km sealed walkway linking South Bay, Dynamite Bay, and the peaceful Anchorage Bay.",
    link: "https://www.coorow.wa.gov.au/tourism/green-head-three-bays-walkway.aspx",
    linkLabel: "See the walkway",
  },
  {
    title: "Kayak the bays",
    description: "The secluded bays around Green Head are perfect for a quiet paddle, with kayaks available to hire.",
  },
  {
    title: "Explore the coastline",
    description: "Find coves, beaches, rocky outcrops, fishing spots, and wide-open Indian Ocean views.",
  },
  {
    title: "Stockyard Gully Caves",
    description: "Walk the 300 metre sandy-floored cave system and keep an eye out for colonies of bats.",
    link: "https://www.coorow.wa.gov.au/Profiles/coorow/Assets/ClientData/Stockyard_Gully_Caves.pdf",
    linkLabel: "Plan your visit",
  },
  {
    title: "Lesueur National Park",
    description: "Pack a picnic and take in the remarkable fauna and flora of one of Western Australia’s wildflower regions.",
    link: "https://parks.dpaw.wa.gov.au/park/lesueur",
    linkLabel: "Visit the park",
  },
  {
    title: "Wedding weekends",
    description: "With space, accommodation, and a headland location, Centre Break can be the setting for a relaxed celebration.",
  },
];

export const quickActivities = [
  "Swimming & snorkelling",
  "Beach fishing",
  "Water sports",
  "Sand boarding",
  "Walk trails",
  "Skydive Jurien Bay",
];

export const greenHeadLinks = {
  localGuide: "https://coorow.wa.gov.au/visitors/our-shire/green-head/",
  destinationGuide: "https://visitturquoisecoast.com.au/destination/green-head",
  threeBaysWalkway: "https://trailswa.com.au/trails/trail/three-bays-walkway-greenhead",
  seaLionTours: "https://www.sealioncharters.com.au/tours",
  lesueurNationalPark: "https://exploreparks.dbca.wa.gov.au/park/lesueur-national-park",
  caveInformation: "https://coorow.wa.gov.au/visitors/see-and-do/caves/",
  parkAlerts: "https://alerts.dbca.wa.gov.au/",
} as const;

export type GreenHeadHighlight = {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

export const greenHeadHighlights: GreenHeadHighlight[] = [
  {
    title: "Dynamite Bay",
    description:
      "A sheltered, turquoise bay for swimming, snorkelling, beach fishing, picnics and slow afternoons by the water.",
    link: greenHeadLinks.localGuide,
    linkLabel: "Plan your beach day",
  },
  {
    title: "Three Bays Walkway",
    description:
      "Follow the easy 2.8 km coastal trail between South Bay, Dynamite Bay and Little Anchorage, with lookouts along the way.",
    link: greenHeadLinks.threeBaysWalkway,
    linkLabel: "See the trail details",
  },
  {
    title: "Point Louise",
    description:
      "A local surf break with clear water and reef for visitors who want to surf, snorkel or watch the coast from the rocks.",
    link: greenHeadLinks.localGuide,
    linkLabel: "Explore Green Head",
  },
  {
    title: "Sea lion tours",
    description:
      "Join a pre-booked tour from Jurien Bay Boat Harbour to meet Australian sea lions around the offshore islands. Every interaction is on the animals’ terms.",
    link: greenHeadLinks.seaLionTours,
    linkLabel: "See tour information",
  },
  {
    title: "Fishing & boating",
    description:
      "Try beach fishing, use the South Bay boat ramp or explore the coastline from Anchorage Bay’s jetty and fish-cleaning facilities.",
    link: greenHeadLinks.destinationGuide,
    linkLabel: "See local visitor information",
  },
  {
    title: "Wildflowers & Lesueur",
    description:
      "Head inland for spring colour and the remarkable plant diversity of Lesueur National Park, one of the region’s great nature escapes.",
    link: greenHeadLinks.lesueurNationalPark,
    linkLabel: "Plan a park visit",
  },
  {
    title: "Galleries & local stops",
    description:
      "Take a slower turn through Green Head’s galleries, mini golf, café stops and small-town coastal character between beach adventures.",
    link: greenHeadLinks.destinationGuide,
    linkLabel: "Explore the destination guide",
  },
];

export const greenHeadDayPlan = [
  {
    time: "First light",
    title: "Start with the water",
    description:
      "Walk down to Dynamite Bay for a swim, snorkel or quiet coffee before the day gets moving.",
  },
  {
    time: "Morning",
    title: "Choose your adventure",
    description:
      "Follow the Three Bays Walkway, explore Point Louise or join a pre-booked sea lion tour from nearby Jurien Bay.",
  },
  {
    time: "Afternoon",
    title: "Go inland for colour",
    description:
      "Make room for wildflowers, park trails or a gallery stop when you feel like changing the view.",
  },
  {
    time: "Evening",
    title: "Stay close to dinner",
    description:
      "Come back to Green Head, settle in and eat onsite at Centre Break Restaurant without packing up the whole day.",
  },
];

export type GreenHeadFaq = {
  question: string;
  answer: string;
};

export const greenHeadFaqs: GreenHeadFaq[] = [
  {
    question: "Where is Green Head, WA?",
    answer:
      "Green Head is a coastal town on Western Australia’s Turquoise Coast, around 15 minutes from Jurien Bay along Indian Ocean Drive. Centre Break Beach Stay is at 1 Green Head Road.",
  },
  {
    question: "What are the best things to do in Green Head?",
    answer:
      "Popular Green Head activities include swimming and snorkelling at Dynamite Bay, walking the 2.8 km Three Bays Walkway, surfing or snorkelling at Point Louise, fishing, visiting galleries and exploring wildflowers and nearby Lesueur National Park.",
  },
  {
    question: "How close is Dynamite Bay to Centre Break Beach Stay?",
    answer:
      "Dynamite Bay is approximately 50 metres from Centre Break Beach Stay, making it easy to fit in a swim, snorkel or sunset walk.",
  },
  {
    question: "Where can I eat in Green Head?",
    answer:
      "Centre Break Restaurant is a public, licensed restaurant onsite at Centre Break Beach Stay. Current hours are lunch from 11am–2pm and dinner from 5pm–7pm, seven days a week. Hours can change, so check the menu or call ahead.",
  },
  {
    question: "Is Stockyard Gully Cave open?",
    answer:
      "The Shire of Coorow currently lists the Stockyard Gully Cave Walk and southern access track as closed until further notice. Check official access updates before travelling.",
  },
];
