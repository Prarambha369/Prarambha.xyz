"use client";

import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/Button";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <div className="mb-16">
        <p className="font-mono text-[10px] tracking-widest uppercase text-primary mb-4">
          // CONTACT
        </p>
        <h1 className="font-display font-bold text-4xl md:text-7xl mb-8">
          Let's talk.
        </h1>
        <p className="text-text-2 text-xl leading-relaxed max-w-2xl mb-12">
          I'm open to remote internships, open-source collaboration, and ecosystem partnerships.
        </p>
      </div>

      <div className="space-y-12 mb-24">
        <div>
          <p className="text-text-muted text-xs font-mono uppercase tracking-widest mb-4">Primary Email</p>
          <a
            href="mailto:prarambha@butwalhacks.com"
            className="font-display font-bold text-2xl md:text-4xl text-primary hover:text-[#FF8040] transition-colors break-all"
          >
            prarambha@butwalhacks.com
          </a>
        </div>

        <div className="flex flex-wrap gap-8 pt-8">
          {[
            { label: "GitHub", href: "https://github.com/Prarambha369", icon: <Github size={20} /> },
            { label: "LinkedIn", href: "https://linkedin.com/in/misterbashyal", icon: <Linkedin size={20} /> },
            { label: "Butwal Hacks", href: "https://butwalhacks.com", icon: <Globe size={20} /> },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-text-2 hover:text-text transition-colors group"
            >
              <span className="p-2 border border-border group-hover:border-primary rounded-lg transition-colors">
                {link.icon}
              </span>
              <span className="font-mono text-sm uppercase tracking-widest">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="p-8 border border-border bg-surface-2 rounded-lg">
        <p className="text-text-2 text-sm leading-relaxed">
          <strong>Note:</strong> I'm in <span className="text-primary">UTC+5:45 (Nepal Time)</span>. I typically respond within 48 hours. I work entirely from a smartphone, so if you see "sent from my mobile," I'm actually at my primary workstation.
        </p>
      </div>
    </div>
  );
}
