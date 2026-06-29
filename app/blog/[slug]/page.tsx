"use client";

import React from "react";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/cms";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div className="section-padding pt-40">Post not found</div>;

  return (
    <div className="flex flex-col">
      <section className="section-padding pt-40 border-b border-border">
        <div className="container-width max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 label-mono group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to blog
          </Link>

          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="label-mono text-primary">{post.category.toUpperCase()}</span>
              <span className="text-text-muted">•</span>
              <span className="label-mono opacity-50">{post.publishedDate}</span>
            </div>
            <h1 className="text-display mb-12">{post.title}</h1>
            <p className="text-h3 text-text-2 leading-relaxed italic">{post.excerpt}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width max-w-4xl">
           <Reveal delay={0.4}>
              <div className="aspect-[16/9] bg-surface-2 border border-border overflow-hidden mb-16">
                 <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-invert prose-lg max-w-none">
                 <div className="text-text-2 leading-relaxed space-y-8">
                    {post.body.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                 </div>
              </div>
           </Reveal>
        </div>
      </section>
    </div>
  );
}
