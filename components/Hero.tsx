"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -ml-40 pointer-events-none" />

      <div className="container-width relative z-10">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-mono text-primary flex items-center gap-4"
          >
            <span className="w-12 h-px bg-primary" />
            Ecosystem Founder · OSS Builder
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display leading-[0.85]"
          >
            /PRARAMBHA<br />
            BASHYAL<span className="text-primary animate-pulse">_</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-h3 text-text-2 leading-tight">
              Building the tech infrastructure that didn't exist in Butwal, Nepal.
              Founder of Butwal Hacks. Maintainer at GNOME Nepal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center mt-4"
          >
            <Button href="/work">View Selected Work</Button>
            <Button variant="ghost" href="/about">My Story</Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-container flex flex-col items-center gap-4"
      >
        <span className="label-mono [writing-mode:vertical-lr] mb-2 opacity-50">SCROLL TO EXPLORE</span>
        <ArrowDown className="text-primary animate-bounce" size={20} />
      </motion.div>

      {/* Grid background effect */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none fine-grain" />
    </section>
  );
};
