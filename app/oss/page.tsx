"use client";

import React from "react";
import { Github, Star, GitCommit, Layout } from "lucide-react";
import { Button } from "@/components/Button";

export default function OSS() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          // OPEN SOURCE
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
          Code belongs to<br />the people.
        </h1>
        <p className="text-text-2 text-lg leading-relaxed max-w-2xl mb-8">
          "I believe open-source infrastructure is how you build equitable access to technology — not just conferences about it."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: <GitCommit className="text-primary" />, value: "680+", label: "Git Commits" },
          { icon: <Layout className="text-cyan" />, value: "5", label: "Public Repos" },
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
          <h2 className="font-display font-bold text-2xl">Philosophy</h2>
          <div className="prose prose-invert text-text-2 space-y-4">
            <p>
              I build in public because I believe software should be transparent and auditable. My goal is to lower the barrier to entry for Nepali students by providing high-quality, open-source templates and tools.
            </p>
            <p>
              Whether it's browser extensions for focus or Discord bots for community management, I ensure all my logic is available for others to learn from and improve upon.
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
