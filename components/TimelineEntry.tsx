import React from "react";
import { ExperienceEntry } from "@/data/experience";

interface TimelineEntryProps {
  entry: ExperienceEntry;
}

export const TimelineEntry = ({ entry }: TimelineEntryProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Connector Line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-transparent" />

      {/* Dot */}
      <div className="absolute left-[-4px] top-2 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_rgba(255,102,17,0.5)]" />

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
        <h3 className="font-display font-bold text-xl text-text">
          {entry.role}
        </h3>
        <span className="font-mono text-[10px] text-text-muted whitespace-nowrap">
          {entry.start} — {entry.end}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {entry.orgUrl ? (
          <a
            href={entry.orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium hover:underline underline-offset-4"
          >
            {entry.org}
          </a>
        ) : (
          <span className="text-primary text-sm font-medium">{entry.org}</span>
        )}
        <span className="text-text-muted text-xs">• {entry.type}</span>
      </div>

      <p className="text-text-2 text-sm leading-relaxed max-w-2xl">
        {entry.description}
      </p>
    </div>
  );
};
