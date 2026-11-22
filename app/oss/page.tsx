"use client";

import React from "react";
import { Star, GitCommit, Layout } from "lucide-react";
import { Github } from "@/components/BrandIcons";
import { Button } from "@/components/Button";
import { contributions, githubStats } from "@/data/projects";

export default function OSS() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          {"// OPEN SOURCE"}
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
          Code belongs to<br />the people.
        </h1>
        <p className="text-text-2 text-lg leading-relaxed max-w-2xl mb-8">
          “I believe open-source infrastructure is how you build equitable access to technology — not just conferences about it.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <GitCommit className="text-primary" />, value: `${githubStats.contributionsLastYear}`, label: `Contributions in the 12 months to ${githubStats.snapshot}` },
          { icon: <Layout className="text-cyan" />, value: `${githubStats.originalRepos}`, label: "Original public repos" },
          { icon: <Star className="text-amber" />, value: "Top-5", label: "GNOME Nepal Contributor" },
        ].map((stat, i) => (
          <div key={i} className="p-8 border border-border bg-surface-2 rounded-lg text-center">
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <div className="text-3xl font-bold font-mono mb-1">{stat.value}</div>
            <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-16">
        <div className="p-8 border border-primary/20 bg-primary/5 rounded-lg border-l-4 border-l-primary">
          <h2 className="font-display font-bold text-2xl mb-4">GNOME Nepal</h2>
          <p className="text-text-2 mb-6">
            Active maintainer and top-5 contributor to the GNOME Nepal community. I manage community platforms, co-host city events in Butwal, and volunteered at UbuCon Asia 2025.
          </p>
          <Button variant="ghost" href="https://nepal.gnome.org" external>
            Visit GNOME Nepal
          </Button>
        </div>

        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl">Upstream work</h2>
          <ul className="divide-y divide-border border-y border-border">
            {contributions.map((c) => (
              <li key={c.repo}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-5 group"
                >
                  <span className="font-mono text-sm text-text group-hover:text-primary transition-colors md:w-72 shrink-0">
                    {c.repo}
                  </span>
                  <span className="text-sm text-text-2 flex-grow">{c.summary}</span>
                  <span className="font-mono text-xs text-text-2 shrink-0">
                    {c.badge ?? `${c.prs} PR${c.prs === 1 ? "" : "s"}`} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl">Philosophy</h2>
          <div className="prose prose-invert text-text-2 space-y-4">
            <p>
              I build in public because I believe software should be transparent and auditable. My goal is to lower the barrier to entry for Nepali students by providing high-quality, open-source templates and tools.
            </p>
            <p>
              Whether it’s browser extensions for focus or Discord bots for community management, I ensure all my logic is available for others to learn from and improve upon.
            </p>
          </div>
          <div className="pt-6">
             <Button href="https://github.com/Prarambha369" external>
                <Github size={18} className="mr-2" /> Follow on GitHub
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
