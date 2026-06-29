"use client";

import React from "react";
import { useParams } from "next/navigation";
import { teamMembers } from "@/data/cms";
import { Reveal } from "@/components/Reveal";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function TeamMemberDetail() {
  const { slug } = useParams();
  const member = teamMembers.find(m => m.slug === slug);

  if (!member) return <div className="section-padding pt-40">Member not found</div>;

  const socialIcons = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 border-b border-border bg-surface/30">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
             <Reveal>
                <label className="label-mono text-primary mb-4 block">// TEAM MEMBER</label>
                <h1 className="text-display mb-4">{member.name}</h1>
                <p className="text-h3 text-primary font-mono mb-8">{member.role}</p>
                <div className="flex gap-4">
                  {member.socialLinks.map((link, i) => {
                    const Icon = socialIcons[link.platform];
                    return (
                      <a key={i} href={link.url} className="p-3 bg-bg border border-border hover:border-primary transition-colors text-text-2 hover:text-primary">
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
             </Reveal>
             <Reveal delay={0.4}>
                <div className="aspect-square bg-surface-2 border border-border overflow-hidden">
                   <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale" />
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-3xl">
           <Reveal delay={0.6}>
              <h2 className="label-mono text-text-muted mb-8">BIOGRAPHY</h2>
              <p className="text-body-l text-text-2 leading-relaxed">
                 {member.bio}
              </p>
           </Reveal>
        </div>
      </section>
    </div>
  );
}
