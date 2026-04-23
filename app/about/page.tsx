"use client";

import React from "react";
import { TimelineEntry } from "@/components/TimelineEntry";
import { experience } from "@/data/experience";
import { Button } from "@/components/Button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          // THE STORY
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
          Butwal Hacks started as one approved email.
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-grow space-y-6 text-text-2 leading-relaxed">
            <p>
              It became Rupandehi's first student-led tech ecosystem — a game jam, a hackathon, partnerships with Google and MLH, organized entirely by teenagers in a city most tech companies have never heard of.
            </p>
            <p>
              Outside of that, I maintain GNOME Nepal as a top-5 contributor and volunteered at UbuCon Asia 2025. I work entirely from a smartphone, proving that access to high-end hardware isn't the bottleneck for the next generation of builders.
            </p>
            <p>
              I believe open-source infrastructure is how you build equitable access to technology — not just conferences about it.
            </p>
          </div>
          <div className="w-full md:w-64 flex flex-col gap-4">
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-black font-display font-bold text-6xl">
              P
            </div>
            <div className="space-y-3 pt-4">
               <a href="https://github.com/Prarambha369" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors">
                 <Github size={18} /> GitHub
               </a>
               <a href="https://linkedin.com/in/misterbashyal" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors">
                 <Linkedin size={18} /> LinkedIn
               </a>
               <a href="mailto:prarambha@butwalhacks.com" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors">
                 <Mail size={18} /> Email
               </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-24">
         <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-8">
          // CORE VALUES
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { title: "Privacy-first", desc: "Digital sovereignty is a human right, not a feature." },
             { title: "Open Source", desc: "Build in public, share the logic, invite the world." },
             { title: "Build in Public", desc: "The process is as valuable as the product." },
             { title: "Community over Competition", desc: "We grow faster when we grow together." }
           ].map((val, i) => (
             <div key={i} className="p-6 border border-border bg-surface-2 rounded-lg">
                <h3 className="font-display font-bold text-lg mb-2 text-primary">{val.title}</h3>
                <p className="text-sm text-text-muted">{val.desc}</p>
             </div>
           ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-12">
          // FULL TIMELINE
        </p>
        <div className="flex flex-col">
          {experience.map((exp, index) => (
            <TimelineEntry key={index} entry={exp} />
          ))}
        </div>
      </div>
    </div>
  );
}
