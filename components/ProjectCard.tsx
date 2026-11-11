"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Layers, Sparkles, Check } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={false}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-[#0c0e22]/90 dark:hover:border-violet-400/50 dark:hover:shadow-[0_20px_50px_-15px_rgba(124,58,237,0.3)]"
    >
      {/* Top Preview Image using Next.js <Image /> */}
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200/60 bg-slate-950 dark:border-white/10">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

          {/* Role & Period Overlay Badges */}
          <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 font-mono text-[11px] font-semibold text-white backdrop-blur-md">
              <Layers className="h-3 w-3 text-violet-400" />
              {project.role}
            </span>
            <span className="rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 font-mono text-[11px] text-slate-300 backdrop-blur-md">
              {project.period}
            </span>
          </div>

          {/* Core Feature Highlight Ribbon */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/30 bg-amber-500/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-amber-200 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-amber-400" />
              Key Feature: {project.featureHighlight}
            </span>
          </div>
        </div>

        {/* Project Content Body */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                {project.category}
              </span>
              <h3 className="mt-1 font-display text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                {project.title}
              </h3>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {project.subtitle}
              </p>
            </div>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:bg-violet-600"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Project Narrative Description */}
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          {/* Key Backend & System Architecture Highlights */}
          <ul className="mt-4 space-y-2 border-t border-slate-200/60 pt-4 dark:border-white/10">
            {project.architectureHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300/90"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack Chips / Pills at Bottom of Card */}
      <div className="border-t border-slate-200/70 bg-slate-50/70 px-6 py-4 dark:border-white/10 dark:bg-white/[0.02] sm:px-7">
        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 font-mono text-xs font-semibold text-violet-700 transition-colors group-hover:border-violet-500/40 dark:border-violet-400/25 dark:bg-violet-500/15 dark:text-violet-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
