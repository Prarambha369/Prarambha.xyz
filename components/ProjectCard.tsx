"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import { ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(255, 102, 17, 0.4)" }}
      className="group p-8 border border-border bg-surface-2 rounded-lg flex flex-col h-full transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="font-mono text-[11px] text-text-2 shrink-0">{project.year}</span>
      </div>

      <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-text-2 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {project.highlight && (
        <p className="font-mono text-xs text-primary mb-6">↳ {project.highlight}</p>
      )}

      <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <Github size={14} />
            Source
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <ExternalLink size={14} />
            Live
          </a>
        )}
        {project.reference && (
          <a
            href={project.reference.url}
            target="_blank"
            rel="noopener"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <ExternalLink size={14} />
            {project.reference.label}
          </a>
        )}
        {project.status === "concept" && (
          <span className="ml-auto text-cyan text-[11px] font-mono">Pitch / concept</span>
        )}
        {project.status === "in-development" && (
          <span className="ml-auto text-amber text-[11px] font-mono">In development</span>
        )}
        {project.status === "archived" && (
          <span className="ml-auto text-text-2 text-[11px] font-mono">Archived</span>
        )}
      </div>
    </motion.div>
  );
};
