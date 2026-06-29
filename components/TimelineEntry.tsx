"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExperienceEntry } from "@/data/experience";

interface TimelineEntryProps {
  entry: ExperienceEntry;
}

export const TimelineEntry = ({ entry }: TimelineEntryProps) => {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 py-12 border-b border-border group transition-all"
    >
      <div className="label-mono pt-2 text-text-muted group-hover:text-primary transition-colors">
        {entry.start} — {entry.end}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
          <h3 className="text-h3">{entry.role}</h3>
          <span className="text-primary font-mono text-sm tracking-tighter italic">@ {entry.org}</span>
        </div>

        <p className="text-text-2 text-lg max-w-3xl leading-relaxed">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
};
