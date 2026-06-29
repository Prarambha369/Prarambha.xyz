"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects } from "@/data/cms";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Lightbox } from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.id === slug);

  if (!project) return <div className="section-padding pt-40 text-center">
    <h1 className="text-h1 mb-8">Project not found</h1>
    <Button href="/work">Back to all work</Button>
  </div>;

  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 border-b border-border">
        <div className="container-width">
          <Link href="/work" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 label-mono group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to all work
          </Link>

          <Reveal>
            <div className="flex justify-between items-start mb-8">
              <label className="label-mono text-primary">// {project.category.toUpperCase()}</label>
              <span className="label-mono opacity-50">{project.year}</span>
            </div>
            <h1 className="text-display mb-12">{project.title}</h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-8">
              <Reveal delay={0.4}>
                <Lightbox src={project.heroMedia.url} alt={project.title} />
              </Reveal>
            </div>
            <div className="lg:col-span-4 space-y-12">
              <Reveal delay={0.6}>
                <div className="space-y-4">
                  <label className="label-mono text-text-muted">CLIENT</label>
                  <p className="text-h3">{project.client}</p>
                </div>
                <div className="space-y-4 pt-12 border-t border-border">
                  <label className="label-mono text-text-muted">SERVICES</label>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map(s => (
                      <span key={s} className="px-3 py-1 bg-surface-2 border border-border text-xs label-mono">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <label className="label-mono text-primary">THE GOAL</label>
                <p className="text-text-2 text-lg leading-relaxed">{project.goals}</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="space-y-6">
                <label className="label-mono text-primary">THE PROCESS</label>
                <p className="text-text-2 text-lg leading-relaxed">{project.process}</p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="space-y-6">
                <label className="label-mono text-primary">THE RESULTS</label>
                <p className="text-text-2 text-lg leading-relaxed">{project.results}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <label className="label-mono text-primary mb-12 block">// GALLERY</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <Lightbox src={img} alt={`${project.title} gallery image ${i + 1}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface border-t border-border">
        <div className="container-width text-center">
          <Reveal>
            <h2 className="text-h1 mb-12">Next Project</h2>
            <Button variant="secondary" href="/work">View All Portfolio</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
