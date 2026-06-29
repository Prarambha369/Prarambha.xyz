"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 bg-surface/30 border-b border-border">
        <div className="container-width">
          <Reveal>
            <label className="label-mono text-primary mb-4 block">// ABOUT ME</label>
            <h1 className="text-display mb-12">Building for the next billion.</h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <Reveal delay={0.4}>
              <div className="space-y-8">
                <p className="text-body-l text-text-2 leading-relaxed">
                  I'm Prarambha Bashyal, a 15-year-old developer and ecosystem founder from Butwal, Nepal.
                  My journey started with a simple question: "How does this work?" and evolved into
                  "How can I build this for my community?"
                </p>
                <p className="text-body-l text-text-2 leading-relaxed">
                  In a region with limited institutional tech support, I focused on building the
                  infrastructure myself. I founded Butwal Hacks to bring student-led tech events
                  to my city, partnered with global organizations like MLH, and joined GNOME Nepal
                   as a maintainer.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="aspect-square bg-surface-2 border border-border overflow-hidden relative group">
                <img src="/placeholder-profile.jpg" alt="Prarambha Bashyal" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/10 opacity-50" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Reveal delay={0.2}>
              <div className="space-y-4">
                <span className="text-h1 text-primary">01.</span>
                <h3 className="text-h3">Community First</h3>
                <p className="text-text-2">Building tech is a lonely path; building communities ensures no one has to walk it alone.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-4">
                <span className="text-h1 text-primary">02.</span>
                <h3 className="text-h3">Open Source</h3>
                <p className="text-text-2">Software should be accessible. I contribute to and build tools that empower others to learn.</p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="space-y-4">
                <span className="text-h1 text-primary">03.</span>
                <h3 className="text-h3">Global Standards</h3>
                <p className="text-text-2">Geography shouldn't define quality. I bring international-standard tech practices to local levels.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg border-t border-border">
        <div className="container-width text-center">
          <Reveal>
            <h2 className="text-h1 mb-12">Want to collaborate?</h2>
            <Button href="/contact">Get in touch</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
