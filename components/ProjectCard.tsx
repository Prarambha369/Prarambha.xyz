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

const statusLabels: Record<Project["status"], string> = {
  live: "Live",
  oss: "Open Source",
  "in-development": "In Development",
  concept: "Pitch / Concept",
  archived: "Archived",
};

const statusStyles: Record<Project["status"], string> = {
  live: "border-primary/40 text-primary",
  oss: "border-border-2 text-text-2",
  "in-development": "border-amber/40 text-amber",
  concept: "border-cyan/40 text-cyan",
  archived: "border-border-2 text-text-2",
};

const linkClass =
  "text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(255, 102, 17, 0.5)" }}
      className="group p-8 border border-border bg-surface-2 rounded-xl flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-bg"
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <span
            className={`font-mono text-[10px] uppercase px-2 py-0.5 rounded border ${statusStyles[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>
          <span className="font-mono text-[11px] text-text-2">{project.year}</span>
        </div>
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

      {project.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/50">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-text-2 bg-surface px-2 py-0.5 rounded border border-border/40"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source for ${project.title} (opens in a new tab)`}
            className={linkClass}
          >
            <Github size={14} aria-hidden="true" />
            Source ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live site for ${project.title} (opens in a new tab)`}
            className={linkClass}
          >
            <ExternalLink size={14} aria-hidden="true" />
            Live ↗
          </a>
        )}
        {project.reference && (
          <a
            href={project.reference.url}
            target="_blank"
            rel="noopener"
            aria-label={`${project.reference.label}, for ${project.title} (opens in a new tab)`}
            className={linkClass}
          >
            <ExternalLink size={14} aria-hidden="true" />
            {project.reference.label} ↗
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && !project.reference && (
          <span className="text-text-2 text-[11px] font-mono italic">No public links yet</span>
        )}
      </div>
    </motion.div>
  );
};
