"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tag } from "./Tag";
import { BookOpen, Download, ExternalLink, FileArchive } from "lucide-react";
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

const buttonClass =
  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/50 text-primary hover:bg-primary hover:text-bg transition-colors text-xs font-mono focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

// Category accent for generated banners/monograms when a repo has no artwork.
const categoryAccent: Record<Project["category"], string> = {
  Community: "from-primary/40",
  Apps: "from-cyan/30",
  Extensions: "from-amber/30",
  Games: "from-primary/30",
  "Bots & CLI": "from-cyan/25",
  Hardware: "from-amber/25",
};

const monogram = (title: string) =>
  title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

const zipUrl = (repoUrl: string, branch = "main") => `${repoUrl}/archive/refs/heads/${branch}.zip`;

const linkClass =
  "text-text-muted hover:text-primary transition-colors flex items-center gap-1.5 text-xs font-mono rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, borderColor: "rgba(255, 102, 17, 0.5)" }}
      className="group p-8 border border-border bg-surface-2 rounded-xl flex flex-col h-full transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-bg"
    >
      <div className="relative -mx-8 -mt-8 mb-10 aspect-[16/9] overflow-visible">
        <div className="absolute inset-0 overflow-hidden rounded-t-xl border-b border-border bg-surface">
          {project.banner ? (
            <Image
              src={project.banner}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 36rem, (min-width: 768px) 50vw, 100vw"
              className={`${project.bannerFit === "contain" ? "object-contain bg-black" : "object-cover object-top"} transition-transform duration-500 group-hover:scale-[1.03]`}
            />
          ) : (
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-gradient-to-br ${categoryAccent[project.category]} via-surface to-bg flex items-center justify-center`}
            >
              <span className="font-display font-bold text-4xl md:text-5xl text-text/15 px-6 text-center leading-tight select-none">
                {project.title}
              </span>
            </div>
          )}
        </div>
        <div className="absolute -bottom-7 left-8 h-14 w-14 rounded-xl border border-border bg-surface-2 shadow-lg overflow-hidden flex items-center justify-center">
          {project.logo ? (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              sizes="3.5rem"
              className="object-contain p-1.5"
            />
          ) : (
            <span aria-hidden="true" className="font-mono font-bold text-lg text-primary">
              {monogram(project.title)}
            </span>
          )}
        </div>
      </div>

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

      {project.requirements && (
        <p className="font-mono text-[11px] text-text-2 mb-6">
          <span className="text-text-muted">Needs:</span> {project.requirements}
        </p>
      )}

      {project.variants && (
        <div className="space-y-3 mb-6">
          {project.variants.map((v) => (
            <div key={v.name} className="p-4 rounded-lg border border-border bg-surface/60">
              <p className="font-mono text-xs text-text mb-1.5">{v.name}</p>
              <p className="text-xs text-text-2 leading-relaxed mb-3">{v.why}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a
                  href={v.download.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${v.download.label}: ${project.title} ${v.name} (opens in a new tab)`}
                  className={buttonClass}
                >
                  <Download size={14} aria-hidden="true" />
                  {v.download.label}
                </a>
                <a
                  href={v.setupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Setup guide for ${project.title} ${v.name} (opens in a new tab)`}
                  className={linkClass}
                >
                  <BookOpen size={14} aria-hidden="true" />
                  Setup ↗
                </a>
                <a
                  href={v.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Source for ${project.title} ${v.name} (opens in a new tab)`}
                  className={linkClass}
                >
                  <Github size={14} aria-hidden="true" />
                  Source ↗
                </a>
              </div>
            </div>
          ))}
        </div>
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
        {project.download && (
          <a
            href={project.download.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.download.label} for ${project.title} (opens in a new tab)`}
            className={buttonClass}
          >
            <Download size={14} aria-hidden="true" />
            {project.download.label}
          </a>
        )}
        {project.setupUrl && (
          <a
            href={project.setupUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Setup guide for ${project.title} (opens in a new tab)`}
            className={linkClass}
          >
            <BookOpen size={14} aria-hidden="true" />
            Setup ↗
          </a>
        )}
        {project.githubUrl && !project.variants && (
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
        {project.githubUrl && !project.download && !project.variants && (
          <a
            href={zipUrl(project.githubUrl, project.defaultBranch)}
            aria-label={`Download source code of ${project.title} as a .zip`}
            className={linkClass}
          >
            <FileArchive size={14} aria-hidden="true" />
            Source .zip
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
        {!project.githubUrl && !project.liveUrl && !project.reference && !project.download && !project.setupUrl && !project.variants && (
          <span className="text-text-2 text-[11px] font-mono italic">No public links yet</span>
        )}
      </div>
    </motion.div>
  );
};
