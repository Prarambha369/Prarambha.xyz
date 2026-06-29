"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/cms";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";

export default function HomeB() {
  return (
    <div className="flex flex-col">
      <section className="min-h-screen flex flex-col justify-center section-padding bg-surface">
        <div className="container-width">
          <Reveal>
            <h1 className="text-display mb-12">Building the<br />digital frontier.</h1>
            <p className="text-h2 text-text-2 max-w-3xl leading-tight mb-12">
              Prarambha is an independent studio focused on community infrastructure and open-source innovation.
            </p>
            <Button href="/work">See the work</Button>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <SectionHeader label="SERVICES" title="What I focus on." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Ecosystem Design', 'OSS Development', 'Community Growth'].map((s, i) => (
              <Reveal key={s} delay={i * 0.2}>
                <div className="p-8 bg-surface-2 border border-border space-y-4">
                  <span className="text-primary font-mono">0{i+1}</span>
                  <h3 className="text-h3">{s}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-width">
           <SectionHeader label="WORK" title="Selected projects." />
           <div className="grid grid-cols-1 gap-12">
              {projects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
