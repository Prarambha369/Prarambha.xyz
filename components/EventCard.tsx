import React from "react";
import Image from "next/image";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import type { EventItem, EventOrg } from "@/data/events";
import { EventGallery } from "@/components/EventGallery";

const OrgList = ({ orgs, label }: { orgs: EventOrg[]; label: string }) => (
  <p className="text-xs text-text-2 leading-relaxed">
    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted mr-1.5">{label}</span>
    {orgs.map((o, i) => (
      <React.Fragment key={o.name}>
        {i > 0 && (i === orgs.length - 1 ? " & " : ", ")}
        {o.url ? (
          <a
            href={o.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-primary underline decoration-border-2 underline-offset-2 transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {o.name}
          </a>
        ) : (
          <span className="text-text">{o.name}</span>
        )}
      </React.Fragment>
    ))}
  </p>
);

export const EventCard = ({ event }: { event: EventItem }) => {
  return (
    <article className="group border border-border bg-surface-2 rounded-xl overflow-hidden flex flex-col h-full transition-colors hover:border-primary/40">
      <div className="relative aspect-[16/9] border-b border-border bg-surface">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
          // Placeholder SVGs are served as-is; real photos go through the optimizer.
          unoptimized={event.image.endsWith(".svg")}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {event.upcoming && (
          <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-primary text-black">
            Upcoming
          </span>
        )}
        {event.placeholder && (
          <span className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-border-2 bg-bg/80 text-text-2">
            Photos soon
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">{event.role}</p>
        <h3 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
          {event.title}
        </h3>
        <div className="flex flex-col gap-1.5 mb-4 font-mono text-[11px] text-text-2">
          <span className="flex items-center gap-2">
            <Calendar size={13} aria-hidden="true" className="text-text-muted" />
            {event.dateLabel}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={13} aria-hidden="true" className="text-text-muted" />
            {event.venue ? `${event.venue}, ${event.city}` : event.city}
          </span>
        </div>
        <p className="text-sm text-text-2 leading-relaxed mb-4 flex-grow">{event.description}</p>
        <div className="flex flex-col gap-1.5 mb-5">
          <OrgList label="Organized by" orgs={event.organizers} />
          {event.sponsors && event.sponsors.length > 0 && <OrgList label="Partners" orgs={event.sponsors} />}
        </div>
        {event.gallery && event.gallery.length > 0 && <EventGallery title={event.title} photos={event.gallery} />}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {event.highlights.map((h) => (
            <span
              key={h}
              className="font-mono text-[10px] text-text-2 bg-surface px-2 py-0.5 rounded border border-border/40"
            >
              {h}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
          {event.url && (
            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${event.ctaLabel ?? "Event site"} for ${event.title} (opens in a new tab)`}
              className={
                event.upcoming
                  ? "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/50 text-primary hover:bg-primary hover:text-black transition-colors text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  : "inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              }
            >
              <ExternalLink size={14} aria-hidden="true" />
              {event.ctaLabel ?? "Event site"} ↗
            </a>
          )}
          {event.postUrl && (
            <a
              href={event.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`My LinkedIn post about ${event.title} (opens in a new tab)`}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <ExternalLink size={14} aria-hidden="true" />
              LinkedIn post ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
