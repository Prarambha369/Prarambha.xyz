"use client";

import React from "react";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/Form";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <Reveal>
                <label className="label-mono text-primary mb-4 block">// CONTACT</label>
                <h1 className="text-display mb-12">Let's talk about the future.</h1>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-12">
                  <div className="space-y-4">
                    <span className="label-mono text-text-muted">EMAIL ME</span>
                    <h3 className="text-h3 text-primary">hello@prarambha.xyz</h3>
                  </div>

                  <div className="space-y-4">
                    <span className="label-mono text-text-muted">FOLLOW ME</span>
                    <div className="flex gap-4">
                      <a href="#" className="p-4 bg-surface-2 border border-border hover:border-primary transition-all text-text-2 hover:text-primary">
                        <Twitter size={24} />
                      </a>
                      <a href="#" className="p-4 bg-surface-2 border border-border hover:border-primary transition-all text-text-2 hover:text-primary">
                        <Github size={24} />
                      </a>
                      <a href="#" className="p-4 bg-surface-2 border border-border hover:border-primary transition-all text-text-2 hover:text-primary">
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="bg-surface/30 border border-border p-8 md:p-12">
              <Reveal delay={0.6}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
