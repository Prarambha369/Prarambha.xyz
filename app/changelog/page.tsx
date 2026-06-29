import React from "react";
import { Reveal } from "@/components/Reveal";

export default function Changelog() {
  const updates = [
    { date: "June 2026", version: "v1.0.0", description: "Initial release of Prarambha.xyz rebranded portfolio." },
    { date: "May 2026", version: "v0.9.0", description: "Design system finalization and component development." },
    { date: "April 2026", version: "v0.8.0", description: "Migration to Next.js 14 and Framer Motion." },
  ];

  return (
    <div className="section-padding pt-40">
      <div className="container-width">
        <Reveal>
          <label className="label-mono text-primary mb-4 block">// UPDATES</label>
          <h1 className="text-h1 mb-16">Changelog</h1>
        </Reveal>

        <div className="space-y-0">
          {updates.map((update, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-border group">
              <div className="label-mono pt-1 text-text-muted group-hover:text-primary transition-colors">
                {update.date}
              </div>
              <div className="space-y-4">
                <h3 className="text-h3">{update.version}</h3>
                <p className="text-text-2 text-lg max-w-2xl">{update.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
