"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Github } from "lucide-react";

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <motion.p variants={item} className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase mb-6">
          ECOSYSTEM FOUNDER · BUTWAL, NEPAL 🇳🇵
        </motion.p>

        <motion.h1 variants={item} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-4">
          "Before, I just wanted to<br />know how it works."
        </motion.h1>

        <motion.h2 variants={item} className="font-display font-normal text-3xl md:text-5xl lg:text-6xl text-text-muted leading-[1.1] mb-8">
          Now, I want to change the way it works.
        </motion.h2>

        <motion.p variants={item} className="text-text-2 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
          I founded Butwal Hacks at 15. No institutional backing. Two events, 90 participants, partnerships with MLH and Google Gemini — in under a year.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <Button href="/work">
            View Work →
          </Button>
          <Button variant="ghost" href="https://github.com/Prarambha369" external>
            <Github className="mr-2 h-4 w-4" />
            GitHub ↗
          </Button>
        </motion.div>
      </motion.div>

      {/* Grid background effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none fine-grain" />
    </section>
  );
};
