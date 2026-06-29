"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { projects } from "@/data/cms";
import { ProjectCard } from "@/components/ProjectCard";

export default function OSS() {
  const ossProjects = projects.filter(p => p.category === 'open-source');

  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 bg-primary/5 border-b border-primary/20">
        <div className="container-width">
          <Reveal>
            <label className="label-mono text-primary mb-4 block">// OPEN SOURCE</label>
            <h1 className="text-display mb-8">Building in public.</h1>
            <p className="text-h3 text-text-2 max-w-2xl leading-tight">
              A commitment to transparency and collaboration. Exploring the projects
              I maintain and contribute to.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          {ossProjects.length > 0 ? (
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {ossProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-24 border border-dashed border-border bg-surface/20">
              <p className="label-mono text-text-muted">No OSS projects listed yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
