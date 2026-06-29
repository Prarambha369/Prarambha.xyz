"use client";

import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/cms";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 bg-surface/30 border-b border-border">
        <div className="container-width">
          <Reveal>
            <label className="label-mono text-primary mb-4 block">// JOURNAL</label>
            <h1 className="text-display mb-8">Thoughts & Insights</h1>
            <p className="text-h3 text-text-2 max-w-2xl leading-tight">
              Writing about community building, open source, and the tech landscape in Nepal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {blogPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
