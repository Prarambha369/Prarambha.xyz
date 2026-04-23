"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Work() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "OSS", "Community", "Climate", "Tools"];

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "OSS") return p.tags.includes("OSS");
    if (filter === "Community") return p.tags.includes("Community");
    if (filter === "Climate") return p.tags.includes("Climate Tech");
    if (filter === "Tools") return p.tags.includes("Browser Extension") || p.tags.includes("Desktop") || p.tags.includes("Discord");
    return true;
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          // PORTFOLIO
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
          Selected Work
        </h1>
        <p className="text-text-2 text-lg max-w-2xl">
          A collection of ecosystems, tools, and systems built to solve problems or explore "how it works."
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-xs font-mono transition-all ${
              filter === cat
                ? "bg-primary text-black"
                : "border border-border-2 text-text-muted hover:border-text-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
