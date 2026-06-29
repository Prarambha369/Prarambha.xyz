"use client";

import React from "react";
import { Hero } from "@/components/Hero";
import { StatBar } from "@/components/StatBar";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { TimelineEntry } from "@/components/TimelineEntry";
import { Button } from "@/components/Button";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/cms";
import { experience } from "@/data/experience";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <StatBar />

      <Marquee items={["Butwal Hacks", "GNOME Nepal", "Open Source", "Ecosystem Building", "Community First", "Building Nepal Tech"]} />

      {/* Intro Section */}
      <section className="section-padding bg-surface/30">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-7">
              <SectionHeader
                label="INTRODUCTION"
                title="The next generation of software comes from places people aren't looking yet."
                description="Based in Butwal, Nepal, I'm building the tools and communities that the next generation of developers will use to define the future of the web. Maintaining GNOME Nepal, founding local ecosystems, and building OSS."
              />
              <Reveal delay={0.5}>
                <Button variant="ghost" href="/about">Read Full Story →</Button>
              </Reveal>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <Reveal delay={0.6}>
                <div className="bg-bg border border-border p-8 space-y-6 group hover:border-primary transition-colors duration-500">
                  <label className="label-mono text-primary">// TECH STACK</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <span className="block text-h3">C++</span>
                      <span className="block text-h3">Python</span>
                    </div>
                    <div className="space-y-2">
                      <span className="block text-h3">Next.js</span>
                      <span className="block text-h3">Linux</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding">
        <div className="container-width">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeader
              label="SELECTED WORK"
              title="Building meaningful digital experiences."
            />
            <Reveal delay={0.4}>
              <Button variant="secondary" href="/work" className="mb-16">View All Work</Button>
            </Reveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.filter(p => p.featured).map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-surface-2 border-y border-border">
        <div className="container-width">
          <SectionHeader
            label="JOURNEY"
            title="Ecosystem building & Community scaling."
          />

          <div className="mt-16">
            {experience.map((exp, index) => (
              <TimelineEntry key={index} entry={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container-width relative z-10">
          <Reveal>
            <h2 className="text-display mb-12">Let's build<br />the future.</h2>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-wrap justify-center gap-8">
              <Button href="/contact">Get In Touch</Button>
              <Button variant="secondary" href="/work">See More Work</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
