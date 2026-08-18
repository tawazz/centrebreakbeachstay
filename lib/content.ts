export const bookingUrl = "https://us2.cloudbeds.com/reservation/sqAH3Y";
export const menuUrl =
  "https://centrebreakbeachstay.com.au/wp-content/uploads/2025/01/Medu.pdf";
export const termsUrl =
  "https://centrebreakbeachstay.com.au/wp-content/uploads/2025/02/Centre-Break-Terms-and-Conditions.docx.pdf";

export type Room = {
  name: string;
  eyebrow: string;
  image: string;
  description: string;
  sleeps: string;
  beds: string;
  features: string[];
};

export const rooms: Room[] = [
  {
    name: "Budget Double Room",
    eyebrow: "Shared bathroom",
    image: "/images/room-budget.webp",
    description:
      "A comfortable queen room with a mini bar, TV, tea and coffee facilities, air conditioning, and everything you need for an easy overnight stay.",
    sleeps: "2 guests",
    beds: "1 queen bed",
    features: ["A/C", "Wi-Fi", "TV", "Tea & coffee", "Towels"],
  },
  {
    name: "Ensuite Double Room",
    eyebrow: "Ocean views or deck",
    image: "/images/room-ensuite-double.png",
    description:
      "A bright modern room with a queen bed, ensuite bathroom, air conditioning, flat-screen TV, tea and coffee, and the option of ocean views or a private deck.",
    sleeps: "2 guests",
    beds: "1 queen bed",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Towels"],
  },
  {
    name: "Twin Room",
    eyebrow: "Ensuite",
    image: "/images/room-twin.webp",
    description:
      "Two single beds, an ensuite bathroom, air conditioning, ceiling fan, flat-screen TV, tea and coffee, and a minibar make this a flexible choice for friends or family.",
    sleeps: "2 guests",
    beds: "2 single beds",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Minibar"],
  },
  {
    name: "Self-contained suite",
    eyebrow: "1 bedroom · views to Dynamite Bay",
    image: "/images/room-suite.jpg",
    description:
      "A home away from home for a couple or small family, with a queen bed, single bed, ensuite bathroom, kitchenette, TV, and balcony access.",
    sleeps: "3 guests",
    beds: "1 queen + 1 single",
    features: ["Kitchenette", "A/C", "Wi-Fi", "TV", "Balcony"],
  },
  {
    name: "Family Room",
    eyebrow: "Private bathroom nearby",
    image: "/images/room-family.jpg",
    description:
      "A downstairs family room with a queen bed and bunk bed, coffee-making facilities, TV, and a private bathroom and toilet located next door.",
    sleeps: "4 guests",
    beds: "1 queen + 2 bunks",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Towels"],
  },
  {
    name: "Family ensuite unit",
    eyebrow: "2 rooms · deck access",
    image: "/images/room-family-ensuite.webp",
    description:
      "Two connected rooms with two queen beds and a single bed, ensuite bathroom, air conditioning, flat-screen TV, tea and coffee, and access to the deck.",
    sleeps: "5 guests",
    beds: "2 queens + 1 single",
    features: ["A/C", "Wi-Fi", "TV", "Shower", "Deck"],
  },
  {
    name: "Self-contained suite",
    eyebrow: "2 bedrooms · sleeps 6",
    image: "/images/room-two-bedroom.jpg",
    description:
      "A spacious family setup with a queen room and a bunk room, full kitchenette, air conditioning, ensuite bathroom, balcony access, and ocean views.",
    sleeps: "6 guests",
    beds: "1 queen + 4 singles",
    features: ["Kitchen", "A/C", "Wi-Fi", "TV", "Ocean views"],
  },
];

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
