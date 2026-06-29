"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

export const Marquee = ({ items, reverse = false, speed = 20 }: MarqueeProps) => {
  return (
    <div className="flex overflow-hidden bg-primary/10 py-6 border-y border-primary/20">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-primary font-display text-2xl font-bold uppercase tracking-tighter"
          >
            {item} <span className="ml-12 opacity-30">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};
