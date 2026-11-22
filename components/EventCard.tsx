import React from "react";
import Image from "next/image";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import type { EventItem } from "@/data/events";

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
        <p className="text-sm text-text-2 leading-relaxed mb-5 flex-grow">{event.description}</p>
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
        {event.url && (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Event site for ${event.title} (opens in a new tab)`}
            className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-primary transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <ExternalLink size={14} aria-hidden="true" />
            Event site ↗
          </a>
        )}
      </div>
    </article>
  );
};
