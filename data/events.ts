// Events and community activity. Facts here are restated from the event
// sites/repos (Daydream: daydream.hackclub.com/butwal, HackDay: the hackday
// repo's src/data/event.ts) and from data/experience.ts. Only events with a
// verified date and venue carry startDate/venue, and only those are emitted
// as schema.org Event structured data.
//
// Images: every `image` below is a generated placeholder (public/events/*.svg).
// To use a real photo, drop it into public/events/ and point `image` at it,
// then set `placeholder: false` and write a real `imageAlt`.

export interface EventOrg {
  name: string;
  url?: string;
  /** One of my own organizations; links the event to its site-wide schema node (lib/seo.ts ORGS). */
  ref?: "butwal-hacks" | "nextera-development";
}

export interface EventItem {
  id: string;
  title: string;
  /** Human-readable date, shown on the card. */
  dateLabel: string;
  /** ISO date(s); only set when verified. */
  startDate?: string;
  endDate?: string;
  /** Venue name; only set when verified. */
  venue?: string;
  city: string;
  role: string;
  /** True when I was one of the organizers (adds me as a Person organizer in structured data). */
  iOrganized: boolean;
  organizers: EventOrg[];
  /** Main partners/sponsors, as listed on the event's own site. */
  sponsors?: EventOrg[];
  description: string;
  highlights: string[];
  url?: string;
  image: string;
  imageAlt: string;
  placeholder: boolean;
  featured?: boolean;
  /** Not happened yet: shows an "Upcoming" badge and a registration CTA. */
  upcoming?: boolean;
  /** Label for the event link, e.g. "Pre-register". Defaults to "Event site". */
  ctaLabel?: string;
}

export const events: EventItem[] = [
  {
    id: "cyberutsav-lumbini-2027",
    title: "CyberUtsav Lumbini",
    dateLabel: "January 15–17, 2027",
    startDate: "2027-01-15",
    endDate: "2027-01-17",
    city: "Butwal, Nepal",
    role: "Co-organizer",
    iOrganized: true,
    organizers: [{ name: "CyberUtsav", url: "https://cyberutsav.com" }, { name: "Butwal Hacks", url: "https://butwalhacks.com", ref: "butwal-hacks" }],
    description:
      "Free, 3-day student hackathon in Butwal: the Lumbini Provincial Chapter of Nepal's biggest student hackathon. Teams of 3; winners get direct entry to the Kathmandu Grand Finale. Venue to be announced.",
    highlights: ["Free entry", "3 days", "Teams of 3", "Grand Finale entry"],
    url: "https://lumbini.cyberutsav.com",
    image: "/projects/cyberutsav-lumbini-banner.webp",
    imageAlt: "CyberUtsav Lumbini website: free 3-day student hackathon in Butwal, January 15–17, 2027",
    placeholder: false,
    featured: true,
    upcoming: true,
    ctaLabel: "Pre-register",
  },
  {
    id: "hackday-butwal",
    title: "HackDay Butwal",
    dateLabel: "January 17, 2026",
    startDate: "2026-01-17",
    venue: "Lumbini World School",
    city: "Butwal, Nepal",
    role: "Organizer",
    iOrganized: true,
    organizers: [{ name: "Butwal Hacks", url: "https://butwalhacks.com", ref: "butwal-hacks" }],
    sponsors: [
      { name: "Major League Hacking", url: "https://mlh.io" },
      { name: "Google Gemini", url: "https://gemini.google.com" },
      { name: "iCAN Education Services" },
    ],
    description:
      "One-day, beginner-friendly student hackathon run with Major League Hacking and Google Gemini. Theme: Creativity with caffeine.",
    highlights: ["50 university students", "Major League Hacking", "Google Gemini", "₹22,221+ prize pool"],
    url: "https://hackday.butwalhacks.com",
    image: "/events/hackday-butwal.svg",
    imageAlt: "Placeholder graphic for HackDay Butwal. Event photos coming soon.",
    placeholder: true,
    featured: true,
  },
  {
    id: "daydream-butwal",
    title: "Daydream Butwal",
    dateLabel: "October 10–11, 2025",
    startDate: "2025-10-10",
    endDate: "2025-10-11",
    venue: "Arambha Resort",
    city: "Butwal, Nepal",
    role: "Organizer",
    iOrganized: true,
    organizers: [{ name: "Butwal Hacks", url: "https://butwalhacks.com", ref: "butwal-hacks" }, { name: "Hack Club", url: "https://hackclub.com" }],
    description:
      "24-hour game jam for high-school and upper-middle-school students, the Butwal edition of Hack Club's global Daydream.",
    highlights: ["24-hour game jam", "42 teens", "Hack Club Daydream"],
    url: "https://daydream.hackclub.com/butwal",
    image: "/events/daydream-butwal.svg",
    imageAlt: "Placeholder graphic for Daydream Butwal. Event photos coming soon.",
    placeholder: true,
    featured: true,
  },
  {
    id: "hack4safety-2083",
    title: "Hack4Safety 2083",
    dateLabel: "2026",
    city: "Butwal, Nepal",
    role: "Core organizer",
    iOrganized: true,
    organizers: [{ name: "Lumbini Province Police" }],
    description:
      "Nepal's first government hackathon, presented by Lumbini Province Police: a 36-hour sprint at Butwal Training Center on cybercrime, emergency response and public safety.",
    highlights: ["~80 participants", "36-hour sprint", "Government hackathon", "Public safety"],
    image: "/events/hack4safety-2083.svg",
    imageAlt: "Placeholder graphic for Hack4Safety 2083. Event photos coming soon.",
    placeholder: true,
    featured: true,
  },
  {
    id: "ubucon-asia-2025",
    title: "UbuCon Asia 2025",
    dateLabel: "2025",
    city: "Kathmandu, Nepal",
    role: "Bid contributor & volunteer",
    iOrganized: false,
    organizers: [{ name: "UbuCon Asia", url: "https://2025.ubucon.asia" }],
    description:
      "Contributed to the Kathmandu bid for UbuCon Asia 2025 and volunteered on-site at the conference.",
    highlights: ["Ubuntu", "Open source", "Volunteer"],
    image: "/events/ubucon-asia-2025.svg",
    imageAlt: "Placeholder graphic for UbuCon Asia 2025. Event photos coming soon.",
    placeholder: true,
  },
  {
    id: "gnome-pizza-party",
    title: "GNOME Nepal × PizzaDAO Pizza Party",
    dateLabel: "Butwal meetup",
    city: "Butwal, Nepal",
    role: "Co-host",
    iOrganized: true,
    organizers: [{ name: "GNOME Nepal", url: "https://nepal.gnome.org" }, { name: "PizzaDAO", url: "https://www.pizzadao.xyz" }],
    description:
      "Community meetup in Butwal co-hosted with GNOME Nepal and PizzaDAO, bringing local open-source enthusiasts together.",
    highlights: ["GNOME Nepal", "PizzaDAO", "Community"],
    image: "/events/gnome-pizza-party.svg",
    imageAlt: "Placeholder graphic for the GNOME Nepal and PizzaDAO Pizza Party. Event photos coming soon.",
    placeholder: true,
  },
  {
    id: "hack-club-workshops",
    title: "Hack Club Butwal workshops",
    dateLabel: "April – September 2025",
    city: "Butwal, Nepal",
    role: "Club president & founder",
    iOrganized: true,
    organizers: [{ name: "Hack Club Butwal" }, { name: "Hack Club", url: "https://hackclub.com" }],
    description:
      "Hands-on workshops for beginner developers at the Hack Club Butwal student chapter, including Boba, Swirl and HackCraft.",
    highlights: ["Boba", "Swirl", "HackCraft"],
    image: "/events/hack-club-workshops.svg",
    imageAlt: "Placeholder graphic for Hack Club Butwal workshops. Photos coming soon.",
    placeholder: true,
  },
];

export const featuredEvents = events.filter((e) => e.featured);
