import React from "react";
import { Reveal } from "@/components/Reveal";

export default function Instructions() {
  return (
    <div className="section-padding pt-40">
      <div className="container-width max-w-4xl">
        <Reveal>
          <label className="label-mono text-primary mb-4 block">// DOCS</label>
          <h1 className="text-h1 mb-12">Handoff Instructions</h1>
        </Reveal>

        <div className="space-y-16">
          <section className="space-y-6">
            <h3 className="text-h3 border-b border-border pb-4">1. Content Management</h3>
            <p className="text-text-2 text-lg">
              Content is managed via typed data files in the <code className="bg-surface-2 px-2 py-1 text-primary">data/</code> directory.
            </p>
            <ul className="list-disc list-inside space-y-4 text-text-2">
              <li>Update <code className="text-white">data/cms.ts</code> to add new projects, blog posts, or team members.</li>
              <li>Images should be placed in the <code className="text-white">public/</code> folder or use external URLs.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="text-h3 border-b border-border pb-4">2. Customizing the Design</h3>
            <p className="text-text-2 text-lg">
              The visual system is controlled via <code className="bg-surface-2 px-2 py-1 text-primary">tailwind.config.ts</code> and <code className="bg-surface-2 px-2 py-1 text-primary">styles/globals.css</code>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
