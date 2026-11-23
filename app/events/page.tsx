import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";
import { events } from "@/data/events";
import { personId } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Hackathons, game jams and community events organized or supported by Prarambha Bashyal in Butwal and Kathmandu: HackDay Butwal, Daydream Butwal, Hack4Safety 2083 and more.",
  alternates: { canonical: "/events" },
};

// Event structured data only for events with a verified date. The place name is
// emitted only for a verified venue; otherwise the location is just the address.
const eventSchema = events
  .filter((e) => e.startDate)
  .map((e) => ({
    "@type": "Event",
    name: e.title,
    description: e.description,
    startDate: e.startDate,
    ...(e.endDate ? { endDate: e.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      ...(e.venue ? { name: e.venue } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: e.city.split(",")[0].trim(),
        addressCountry: "NP",
      },
    },
    organizer: { "@type": "Organization", name: e.organizer },
    performer: { "@id": personId },
    ...(e.url ? { url: e.url } : {}),
    ...(e.upcoming ? { isAccessibleForFree: true } : {}),
  }));

export default function EventsPage() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": eventSchema }} />
      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          {"// EVENTS & COMMUNITY"}
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
          Events that put Butwal on the map.
        </h1>
        <p className="text-text-2 text-lg leading-relaxed max-w-2xl mb-16">
          Hackathons, game jams, workshops and meetups I’ve organized, co-hosted or volunteered at, from Butwal’s
          first student hackathons to UbuCon Asia in Kathmandu.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <CtaBanner
        eyebrow="// PARTNER WITH BUTWAL HACKS"
        title="Sponsor, mentor or bring an event to Lumbini."
        body="We run free events for students outside Kathmandu. Sponsors, mentors, judges and venue partners make that possible."
        primary={{ label: "Sponsor or partner", href: "mailto:prarambha@butwalhacks.com?subject=Partnering%20with%20Butwal%20Hacks" }}
        secondary={{ label: "Visit Butwal Hacks ↗", href: "https://butwalhacks.com", external: true }}
      />
    </>
  );
}
