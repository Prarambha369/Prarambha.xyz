"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { StatBar } from "@/components/StatBar";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineEntry } from "@/components/TimelineEntry";
import { Button } from "@/components/Button";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <StatBar />

      {/* Featured Work */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-4">
          // SELECTED PROJECTS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Button variant="secondary" href="/work">
            View All Projects →
          </Button>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-24 px-6 border-y border-border bg-surface/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display font-bold text-3xl mb-8 leading-tight">
              I believe the next generation of great software will come from places people aren't looking yet.
            </h2>
            <p className="text-text-2 leading-relaxed mb-8">
              I'm 15, based in Butwal, Nepal. I maintain GNOME Nepal as a top-5 contributor, founded two tech communities, and build open-source tools through NextEra Development. I work entirely from a smartphone.
            </p>
            <Button variant="ghost" href="/about">
              Read full story →
            </Button>
          </div>
          <div className="font-mono text-cyan space-y-4">
            <p className="text-[10px] text-text-muted uppercase tracking-widest mb-6">// TECH STACK</p>
            <div className="grid grid-cols-1 gap-4 text-sm md:text-base">
              <div>C++ · Python · Next.js</div>
              <div>TypeScript · SQL · Git</div>
              <div>Linux · Bash · REST APIs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-12">
          // EXPERIENCE
        </p>
        <div className="flex flex-col">
          {experience.map((exp, index) => (
            <TimelineEntry key={index} entry={exp} />
          ))}
        </div>
      </section>

      {/* Certifications / Bottom CTA */}
      <section className="py-24 px-6 text-center bg-primary/5">
        <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
          Let's build something different.
        </h2>
        <div className="flex justify-center gap-4">
          <Button href="/contact">
            Get in touch
          </Button>
          <Button variant="secondary" href="/oss">
            View OSS
          </Button>
        </div>
      </section>
    </div>
  );
}
