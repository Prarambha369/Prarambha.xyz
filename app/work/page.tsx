"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, workCategories } from "@/data/cms";

export default function Work() {
  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 bg-surface/30 border-b border-border">
        <div className="container-width">
          <Reveal>
            <label className="label-mono text-primary mb-4 block">// PORTFOLIO</label>
            <h1 className="text-display mb-8">Selected Work</h1>
            <p className="text-h3 text-text-2 max-w-2xl leading-tight">
              A collection of communities, tools, and experiments built with a focus on
              open-source and local impact.
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-4 mt-12">
            <button className="px-6 py-2 bg-primary text-bg label-mono font-bold">ALL</button>
            {workCategories.map(cat => (
              <button key={cat.slug} className="px-6 py-2 bg-surface-2 border border-border label-mono hover:border-primary transition-colors">
                {cat.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
