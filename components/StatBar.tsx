"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Founded", value: "Butwal Hacks" },
  { label: "Maintaining", value: "GNOME Nepal" },
  { label: "Community", value: "NextEra Dev" },
  { label: "Location", value: "Nepal 🇳🇵" },
];

export const StatBar = () => {
  return (
    <div className="bg-bg border-y border-border py-4 relative z-20">
      <div className="container-width px-container flex flex-wrap justify-between gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="label-mono text-text-muted">{stat.label}:</span>
            <span className="font-mono text-xs font-bold text-primary uppercase">{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
