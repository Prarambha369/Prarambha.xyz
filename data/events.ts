// Events and community activity. Facts here are restated from the event
// sites/repos (Daydream: daydream.hackclub.com/butwal, HackDay: the hackday
// repo's src/data/event.ts) and from data/experience.ts. Only events with a
// verified date and venue carry startDate/venue, and only those are emitted
// as schema.org Event structured data.
//
// Images: every `image` below is a generated placeholder (public/events/*.svg).
// To use a real photo, drop it into public/events/ and point `image` at it,
// then set `placeholder: false` and write a real `imageAlt`.

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
  organizer: string;
  description: string;
  highlights: string[];
  url?: string;
  image: string;
  imageAlt: string;
  placeholder: boolean;
  featured?: boolean;
}

export const events: EventItem[] = [
  {
    id: "hackday-butwal",
    title: "HackDay Butwal",
    dateLabel: "January 17, 2026",
    startDate: "2026-01-17",
    venue: "Lumbini World School",
    city: "Butwal, Nepal",
    role: "Organizer",
    organizer: "Butwal Hacks",
    description:
      "One-day, beginner-friendly student hackathon run with Major League Hacking and Google Gemini. Theme: Creativity with caffeine.",
    highlights: ["Major League Hacking", "Google Gemini", "₹22,221+ prize pool"],
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
    organizer: "Butwal Hacks with Hack Club",
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
    role: "Organizing committee",
    organizer: "Lumbini Province Police",
    description:
      "Nepal's first government hackathon, presented by Lumbini Province Police: a 36-hour sprint at Butwal Training Center on cybercrime, emergency response and public safety.",
    highlights: ["36-hour sprint", "Government hackathon", "Public safety"],
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
    organizer: "Ubuntu community",
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
    organizer: "GNOME Nepal",
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
    organizer: "Hack Club Butwal",
    description:
      "Hands-on workshops for beginner developers at the Hack Club Butwal student chapter, including Boba, Swirl and HackCraft.",
    highlights: ["Boba", "Swirl", "HackCraft"],
    image: "/events/hack-club-workshops.svg",
    imageAlt: "Placeholder graphic for Hack Club Butwal workshops. Photos coming soon.",
    placeholder: true,
  },
];

export const featuredEvents = events.filter((e) => e.featured);
