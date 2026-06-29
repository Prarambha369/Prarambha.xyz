"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";

export default function AboutC() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <section className="section-padding pt-40">
        <div className="container-width text-center">
          <Reveal>
             <h1 className="text-display mb-12">I build things for people.</h1>
             <div className="max-w-3xl mx-auto aspect-video bg-surface-2 border border-border flex items-center justify-center">
                <span className="label-mono opacity-30 italic">PRARAMBHA_STUDIO_IMG.JPG</span>
             </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
