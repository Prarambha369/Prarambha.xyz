"use client";

import React from "react";
import { useParams } from "next/navigation";
import { projects, workCategories } from "@/data/cms";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function WorkCategoryPage() {
  const { category } = useParams();
  const catInfo = workCategories.find(c => c.slug === category);
  const filteredProjects = projects.filter(p => p.category === category);

  if (!catInfo) return <div className="section-padding pt-40">Category not found</div>;

  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 bg-surface/30 border-b border-border">
        <div className="container-width">
          <Reveal>
            <label className="label-mono text-primary mb-4 block">// CATEGORY</label>
            <h1 className="text-display mb-8">{catInfo.name}</h1>
            <p className="text-h3 text-text-2 max-w-2xl leading-tight">
              {catInfo.description}
            </p>
          </Reveal>

          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/work" className="px-6 py-2 bg-surface-2 border border-border label-mono hover:border-primary transition-colors">ALL</Link>
            {workCategories.map(cat => (
              <Link
                key={cat.slug}
                href={`/work/category/${cat.slug}`}
                className={`px-6 py-2 border label-mono transition-colors ${cat.slug === category ? "bg-primary text-bg border-primary" : "bg-surface-2 border-border hover:border-primary"}`}
              >
                {cat.name.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          {filteredProjects.length > 0 ? (
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {filteredProjects.map((project) => (
                  <StaggerItem key={project.id}>
                    <ProjectCard project={project} />
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <div className="text-center py-24 border border-dashed border-border">
              <p className="label-mono text-text-muted">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
