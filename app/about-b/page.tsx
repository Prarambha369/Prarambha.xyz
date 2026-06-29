"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutB() {
  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40">
        <div className="container-width">
          <SectionHeader
            label="THE STORY"
            title="Beyond the code."
            description="A journey of building, failing, and learning in the heart of Nepal."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mt-24">
             <Reveal>
                <div className="space-y-6">
                   <h3 className="text-h3">2022: The Start</h3>
                   <p className="text-text-2">Started exploring the world of programming from a smartphone. NextEra Development was born as a small studio to host my experiments.</p>
                </div>
             </Reveal>
             <Reveal delay={0.2}>
                <div className="space-y-6 border-l border-primary pl-8">
                   <h3 className="text-h3">2024: Community</h3>
                   <p className="text-text-2">Founding Butwal Hacks and joining GNOME Nepal marked a shift from building for myself to building for others.</p>
                </div>
             </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
