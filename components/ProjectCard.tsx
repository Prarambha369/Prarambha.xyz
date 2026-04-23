"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import { Github, ExternalLink } from "lucide-react";
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
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-text-2 text-sm leading-relaxed mb-8 flex-grow">
        {project.description}
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <Github size={14} />
            GitHub
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
        {!project.githubUrl && !project.liveUrl && (
          <span className="text-text-muted/50 text-[10px] font-mono italic">
            In Development
          </span>
        )}
      </div>
    </motion.div>
  );
};
