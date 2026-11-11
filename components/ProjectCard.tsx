"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Sparkles, Check } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  featured?: boolean;
}

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: (index % 2) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50 dark:hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.3)] ${
        featured ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      {/* Top / Main Body Split */}
      <div className={featured ? "lg:grid lg:grid-cols-12 lg:items-stretch" : ""}>
        {/* Preview Image using Next.js <Image /> */}
        <div
          className={
            featured
              ? "relative aspect-[16/9] lg:aspect-auto lg:col-span-6 w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200/60 bg-slate-950 dark:border-emerald-500/20 min-h-[260px]"
              : "relative aspect-[16/9] w-full overflow-hidden border-b border-slate-200/60 bg-slate-950 dark:border-emerald-500/20"
          }
        >
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
              <Layers className="h-3 w-3 text-emerald-400" />
              {project.role}
            </span>
            <span className="rounded-full border border-white/15 bg-slate-950/75 px-3 py-1 font-mono text-[11px] text-slate-300 backdrop-blur-md">
              {project.period}
            </span>
          </div>

          {/* Core Feature Highlight Ribbon */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-200 backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-emerald-400" />
              Key Feature: {project.featureHighlight}
            </span>
          </div>
        </div>

        {/* Project Content Body */}
        <div
          className={
            featured
              ? "lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between"
              : "p-6 sm:p-7"
          }
        >
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                    {project.category}
                  </span>
                  {featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-300 border border-emerald-500/30">
                      ★ FEATURED
                    </span>
                  )}
                </div>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-slate-900 transition-colors group-hover:text-emerald-500 dark:text-white dark:group-hover:text-emerald-400">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Project Narrative Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>

          {/* Key Backend & System Architecture Highlights */}
          <ul className="mt-4 space-y-2 border-t border-slate-200/60 pt-4 dark:border-emerald-500/15">
            {project.architectureHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300/90"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack Chips / Pills at Bottom of Card */}
      <div className="border-t border-slate-200/70 bg-slate-50/70 px-6 py-4 dark:border-emerald-500/15 dark:bg-[#05130e]/80 sm:px-7">
        <div className="flex flex-wrap items-center gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 transition-colors group-hover:border-emerald-500/40 dark:border-emerald-400/25 dark:bg-emerald-500/15 dark:text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
