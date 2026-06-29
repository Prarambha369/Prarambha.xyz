"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/work/${project.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        className="relative flex flex-col h-full bg-surface-2 border border-border overflow-hidden"
      >
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-bg">
          <motion.img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-6 right-6 p-3 bg-bg border border-border group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
            <ArrowUpRight size={20} className="group-hover:text-bg transition-colors" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <span className="label-mono text-primary">{project.category.toUpperCase()}</span>
            <span className="label-mono opacity-50">{project.year}</span>
          </div>

          <h3 className="text-h3 mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-text-2 text-sm line-clamp-2 mt-auto">
            {project.goals}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};
