"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Events & Workshops" },
  { value: "150+", label: "Participants" },
  { value: "680+", label: "Git commits" },
  { value: "25+", label: "Discord servers" },
];

export const StatBar = () => {
  return (
    <div className="border-y border-border bg-surface/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ backgroundColor: "rgba(255, 102, 17, 0.03)" }}
            className="p-8 group transition-colors"
          >
            <div className="font-mono text-3xl font-bold mb-1 group-hover:text-primary transition-colors">
              {stat.value}
            </div>
            <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
