"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, ArrowRight, Github, ExternalLink } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

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
      initial={{ opacity: 0, y: 35, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: (index % 2) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50 dark:hover:shadow-[0_16px_45px_-10px_rgba(16,185,129,0.3)] ${
        featured ? "lg:col-span-2" : "lg:col-span-1"
      }`}
    >
      {/* HUD Cyber Corner Accents */}
      <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400/40 rounded-tr-2xl pointer-events-none transition-colors group-hover:border-emerald-400 z-20" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400/40 rounded-bl-2xl pointer-events-none transition-colors group-hover:border-emerald-400 z-20" />

      <div className={featured ? "lg:grid lg:grid-cols-12 lg:items-center" : ""}>
        {/* Preview Thumbnail Container (Clean Vector Diagram, Zero Badge Overlap) */}
        <Link
          href={`/projects/${project.id}`}
          className={
            featured
              ? "relative block aspect-[16/9] lg:aspect-auto lg:col-span-5 w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200/60 bg-[#071914] dark:border-emerald-500/20 lg:h-full"
              : "relative block aspect-[16/9] w-full overflow-hidden border-b border-slate-200/60 bg-[#071914] dark:border-emerald-500/20"
          }
        >
          <Image
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            className="object-contain p-2.5 sm:p-4 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Card Content Body */}
        <div
          className={
            featured
              ? "lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between"
              : "p-5 sm:p-7 flex flex-col justify-between"
          }
        >
          <div>
            {/* Project Category, Role & Period Header */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <TextGenerateEffect
                  text={project.category}
                  as="span"
                  className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
                />
                {featured && (
                  <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    ★ FEATURED
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-semibold text-emerald-700 dark:text-emerald-300">
                  <Layers className="h-3 w-3 text-emerald-500" />
                  {project.role}
                </span>
                <span className="text-slate-400 dark:text-slate-500 text-[11px] sm:text-xs">
                  {project.period}
                </span>
              </div>
            </div>

            <Link href={`/projects/${project.id}`}>
              <TextGenerateEffect
                text={project.title}
                as="h3"
                delay={0.05}
                className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400"
              />
            </Link>

            <p className="mt-1 text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>

            {/* Clean, Concise 1-sentence Description */}
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {project.shortDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100/80 px-3 py-1 font-mono text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-1 font-mono text-xs text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer: Detail Arsitektur & Repository */}
      <div className="flex items-center justify-between border-t border-slate-200/70 bg-slate-50/70 px-4 sm:px-6 md:px-7 py-3 sm:py-3.5 dark:border-emerald-500/15 dark:bg-[#05130e]/80">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-sm md:text-base font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-300"
            aria-label={`Repository for ${project.title}`}
          >
            <Github className="h-4 w-4" />
            <span>Repository</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        ) : (
          <span className="font-mono text-xs sm:text-sm text-slate-400">Private Source</span>
        )}

        <Link
          href={`/projects/${project.id}`}
          className="group/btn inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-600/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm md:text-base font-semibold text-emerald-700 transition-all hover:bg-emerald-600 hover:text-white dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500 dark:hover:text-white"
        >
          <span>Detail</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
