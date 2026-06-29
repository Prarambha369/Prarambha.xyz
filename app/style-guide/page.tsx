import React from "react";

export default function StyleGuide() {
  return (
    <div className="section-padding">
      <div className="container-width">
        <label className="label-mono mb-4 block">Design System</label>
        <h1 className="text-display mb-12">Style Guide</h1>

        <section className="mb-24">
          <h2 className="mb-8 border-b border-border pb-4">Typography</h2>
          <div className="space-y-12">
            <div>
              <label className="label-mono mb-2 block">Display</label>
              <h1 className="text-display">The quick brown fox</h1>
            </div>
            <div>
              <label className="label-mono mb-2 block">Heading 1</label>
              <h1 className="text-h1">The quick brown fox jumps</h1>
            </div>
            <div>
              <label className="label-mono mb-2 block">Heading 2</label>
              <h2 className="text-h2">The quick brown fox jumps over</h2>
            </div>
            <div>
              <label className="label-mono mb-2 block">Heading 3</label>
              <h3 className="text-h3">The quick brown fox jumps over the lazy dog</h3>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="mb-8 border-b border-border pb-4">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 bg-primary rounded-md"></div>
              <label className="label-mono">Primary (#FF6611)</label>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-secondary rounded-md"></div>
              <label className="label-mono">Secondary (#7542E5)</label>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-accent rounded-md"></div>
              <label className="label-mono">Accent (#DC143C)</label>
            </div>
            <div className="space-y-2">
              <div className="h-24 bg-cyan rounded-md"></div>
              <label className="label-mono">Cyan (#00D4FF)</label>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
