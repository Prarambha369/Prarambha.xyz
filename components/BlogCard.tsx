"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/types";

export const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="space-y-6">
        <div className="aspect-[16/10] overflow-hidden bg-surface-2 border border-border">
          <motion.img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between label-mono">
            <span className="text-primary">{post.category.toUpperCase()}</span>
            <span className="opacity-50">{new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          <h3 className="text-h3 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h3>

          <p className="text-text-2 line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
};
