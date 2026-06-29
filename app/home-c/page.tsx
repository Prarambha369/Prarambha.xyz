"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";

export default function HomeC() {
  return (
    <div className="flex flex-col">
      <section className="pt-40 pb-24 px-container">
        <div className="container-width text-center">
          <Reveal>
            <label className="label-mono text-primary mb-8 block">PRARAMBHA.XYZ</label>
            <h1 className="text-display mb-12">Creating impact through code and community.</h1>
            <div className="flex justify-center gap-8">
              <Button href="/work">Portfolio</Button>
              <Button variant="secondary" href="/contact">Get in touch</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={["NEPAL", "OPEN SOURCE", "COMMUNITY", "DESIGN", "CODE"]} speed={15} />

      <section className="section-padding bg-surface">
        <div className="container-width">
          <div className="aspect-video bg-bg border border-border flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="label-mono text-primary text-xl">SHOWREEL COMING SOON</span>
          </div>
        </div>
      </section>
    </div>
  );
}
