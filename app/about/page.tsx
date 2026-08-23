"use client";

import React from "react";
import Image from "next/image";
import { TimelineEntry } from "@/components/TimelineEntry";
import { experience } from "@/data/experience";
import { Button } from "@/components/Button";
import { Github, Linkedin, Mail, MapPin, Code, Cpu, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          // THE STORY & PROFILE
        </p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
          Systems Architect & Ecosystem Founder based in Butwal, Nepal 🇳🇵
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-grow space-y-6 text-text-2 leading-relaxed text-base md:text-lg">
            <p>
              I'm <strong className="text-text">Prarambha (Vishma) Bashyal</strong> — a 15-year-old systems engineer and founder from Butwal, Nepal. I started with a simple question: <em>"Why do hackathons and tech events only happen in major cities inside the Valley?"</em>
            </p>
            <p>
              That question led me to establish <strong className="text-text">Butwal Hacks</strong> — Rupandehi's first student-led tech ecosystem. With no institutional backing, we produced Daydream Butwal (a 24-hour game jam for teens) and HackDay Butwal (partnered with Major League Hacking & Google Gemini).
            </p>
            <p>
              Beyond ecosystem building, I maintain <strong className="text-text">GNOME Nepal</strong> as a top contributor, served on the organizing committee of <strong className="text-text">Hack4Safety 2083</strong> (Lumbini Province Police Government Hackathon), and build privacy-first tools through NextEra Development.
            </p>
          </div>
          <div className="w-full md:w-72 shrink-0 flex flex-col gap-6 p-6 border border-border bg-surface-2 rounded-xl">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-border">
              <Image
                src="/pfp.jpg"
                alt="Prarambha Bashyal Profile Picture"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <MapPin size={14} className="text-primary" /> Butwal, Nepal (UTC+5:45)
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <Code size={14} className="text-primary" /> C++ · Python · Next.js · Linux
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <Cpu size={14} className="text-primary" /> Systems & Open Source
              </div>
            </div>
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="https://github.com/Prarambha369" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors font-medium">
                <Github size={18} /> GitHub Profile
              </a>
              <a href="https://linkedin.com/in/misterbashyal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors font-medium">
                <Linkedin size={18} /> LinkedIn Profile
              </a>
              <a href="mailto:prarambha@butwalhacks.com" className="flex items-center gap-3 text-sm text-text-2 hover:text-primary transition-colors font-medium">
                <Mail size={18} /> Direct Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Competencies */}
      <div className="mb-20">
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-8">
          // TECHNICAL SKILLS & STACK
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 border border-border bg-surface-2 rounded-lg space-y-3">
            <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
              <Code size={18} /> Languages
            </h3>
            <p className="text-sm text-text-2 leading-relaxed">
              C++, Python, JavaScript, TypeScript, SQL, Bash
            </p>
          </div>
          <div className="p-6 border border-border bg-surface-2 rounded-lg space-y-3">
            <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
              <Cpu size={18} /> Web & Systems
            </h3>
            <p className="text-sm text-text-2 leading-relaxed">
              Next.js 14, React, Tailwind CSS, Linux System Admin, Git, REST APIs
            </p>
          </div>
          <div className="p-6 border border-border bg-surface-2 rounded-lg space-y-3">
            <h3 className="font-display font-bold text-lg text-primary flex items-center gap-2">
              <Award size={18} /> Leadership
            </h3>
            <p className="text-sm text-text-2 leading-relaxed">
              Ecosystem Building, Hackathon Operations, Community Mentorship
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-8">
          // CORE PHILOSOPHY
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Privacy-first", desc: "Digital sovereignty is a human right. Everything built under NextEra Development prioritizes user privacy over algorithms." },
            { title: "Open Source Spirit", desc: "Build in public, share the logic, and invite contribution. Active maintainer in GNOME Nepal." },
            { title: "Ecosystem Access", desc: "Talent is everywhere, opportunity is not. Building technical infrastructure outside major hubs." },
            { title: "Community over Competition", desc: "Students and young builders grow exponentially faster when they collaborate." }
          ].map((val, i) => (
            <div key={i} className="p-6 border border-border bg-surface-2 rounded-lg">
              <h3 className="font-display font-bold text-lg mb-2 text-primary">{val.title}</h3>
              <p className="text-sm text-text-2 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-text-muted mb-12">
          // EXPERIENCE & MILESTONES
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
