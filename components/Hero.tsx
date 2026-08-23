"use client";

import React from "react";
import Image from "next/image";
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
        className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-8">
          <motion.p variants={item} className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase mb-6">
            ECOSYSTEM FOUNDER · BUTWAL, NEPAL 🇳🇵
          </motion.p>

          <motion.h1 variants={item} className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-7xl leading-[1.1] tracking-tight mb-4">
            "Before, I just wanted to<br />know how it works."
          </motion.h1>

          <motion.h2 variants={item} className="font-display font-normal text-2xl sm:text-3xl md:text-5xl lg:text-5xl text-text-muted leading-[1.1] mb-8">
            Now, I want to change the way it works.
          </motion.h2>

          <motion.p variants={item} className="text-text-2 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
            Founded Butwal Hacks at 15. Co-organized Hack4Safety 2083 with Lumbini Province Police, contributed to UbuCon Asia, and led workshops on Git, GitHub, & CS fundamentals across Nepal.
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
        </div>

        {/* Profile Avatar Frame */}
        <motion.div variants={item} className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border bg-surface-2 p-2 shadow-2xl transition-all duration-300 hover:border-primary/40">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src="/pfp.jpg"
                alt="Prarambha Bashyal receiving an award"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Grid background effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none fine-grain" />
    </section>
  );
};
