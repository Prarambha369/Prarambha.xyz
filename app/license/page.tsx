import React from "react";
import { Reveal } from "@/components/Reveal";

export default function License() {
  return (
    <div className="section-padding pt-40">
      <div className="container-width max-w-4xl">
        <Reveal>
          <label className="label-mono text-primary mb-4 block">// LEGAL</label>
          <h1 className="text-h1 mb-12">License</h1>
        </Reveal>

        <div className="prose prose-invert max-w-none space-y-12">
          <section className="space-y-4">
            <h3 className="text-h3 border-b border-border pb-4">MIT License</h3>
            <p className="text-text-2 leading-relaxed">
              Copyright (c) 2026 Prarambha Bashyal
            </p>
            <p className="text-text-2 leading-relaxed">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="text-text-2 leading-relaxed">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
