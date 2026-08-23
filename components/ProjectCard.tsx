"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  oss: 'Open Source',
  'in-development': 'In Development',
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(255, 102, 17, 0.5)" }}
      className="group p-8 border border-border bg-surface-2 rounded-xl flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-bg"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded border border-border-2 text-text-muted">
          {statusLabels[project.status]}
        </span>
      </div>

      <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-text-2 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {project.stack && project.stack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border/50">
          {project.stack.map((tech) => (
            <span key={tech} className="font-mono text-[10px] text-text-muted bg-surface px-2 py-0.5 rounded border border-border/40">
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Github size={14} />
            GitHub ↗
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <ExternalLink size={14} />
            Live ↗
          </a>
        )}
        {!project.githubUrl && !project.liveUrl && (
          <span className="text-text-muted/50 text-[10px] font-mono italic">
            In Development
          </span>
        )}
      </div>
    </motion.div>
  );
};
