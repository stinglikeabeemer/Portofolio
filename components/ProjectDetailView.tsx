"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code2,
  Calendar,
  UserCheck,
  CheckCircle2,
  Terminal,
  Sun,
  Moon,
  Github,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ProjectItem, portfolioData } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export function ProjectDetailView({ project }: { project: ProjectItem }) {
  const { resolvedTheme, setTheme } = useTheme();

  // Find previous and next project for bottom pagination
  const allProjects = portfolioData.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-[#061410] dark:text-slate-100 selection:bg-emerald-500 selection:text-white">
      {/* Top Floating Glassmorphic Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#061410]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 text-emerald-500" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Breadcrumb Info */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-slate-400 dark:text-slate-500">
            <span>Portfolio</span>
            <span>/</span>
            <span>Projects</span>
            <span>/</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{project.title}</span>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-emerald-300 dark:hover:border-emerald-400 transition-all"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 text-slate-700 dark:hidden" />
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-14 lg:px-8">
        {/* Project Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200/80 bg-white/70 p-5 sm:p-10 md:p-12 shadow-xl backdrop-blur-md dark:border-emerald-500/25 dark:bg-[#071914]/80 dark:shadow-[0_16px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Metadata Badges Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
              <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <TextGenerateEffect text={project.category} as="span" />
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <UserCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500" />
              <TextGenerateEffect text={project.role} as="span" delay={0.05} />
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-500" />
              <TextGenerateEffect text={project.period} as="span" delay={0.1} />
            </span>
          </div>

          {/* Project Title & Subtitle */}
          <TextGenerateEffect
            text={project.title}
            as="h1"
            className="mt-5 sm:mt-6 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-slate-900 dark:text-white"
          />
          <TextGenerateEffect
            text={project.subtitle}
            as="p"
            delay={0.1}
            className="mt-2 text-sm sm:text-lg md:text-xl font-semibold text-emerald-600 dark:text-emerald-400"
          />

          {/* Core Summary Paragraph */}
          <TextGenerateEffect
            text={project.description}
            as="p"
            delay={0.2}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-4xl"
          />

          {/* Action CTAs: Repository & Live Demo */}
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-6 border-t border-slate-200/80 dark:border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
              >
                <Github className="h-4.5 w-4.5" />
                <span>View Repository</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-semibold text-slate-800 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-500/30 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-emerald-300"
              >
                <span>Live Application</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}

            <Link
              href="/#projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base font-medium text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <span>Explore other projects</span>
            </Link>
          </div>
        </motion.div>

        {/* System Architecture Diagram Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 sm:mt-10 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 p-4 sm:p-7 md:p-9 shadow-xl backdrop-blur-md dark:border-emerald-500/25 dark:bg-[#071914]/80"
        >
          <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-200/80 dark:border-white/10">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <Code2 className="h-4 sm:h-5 sm:w-5 text-emerald-500" />
              <TextGenerateEffect
                text="System & Architecture Diagram"
                as="h2"
                className="font-display text-base sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white"
              />
            </div>
            <span className="font-mono text-[10px] sm:text-xs md:text-sm text-slate-400 dark:text-slate-500">Vector Specification</span>
          </div>

          <div className="mt-4 sm:mt-6 flex justify-center items-center rounded-2xl bg-slate-100/80 dark:bg-[#040d0a]/90 p-2 sm:p-6 md:p-8 border border-slate-200/60 dark:border-emerald-500/20">
            <div className="relative w-full max-w-3xl aspect-[16/9] flex items-center justify-center">
              <Image
                src={project.image}
                alt={`${project.title} System Architecture`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Deep Dive Architecture & Engineering Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-10 rounded-3xl border border-slate-200/80 bg-white/70 p-5 sm:p-10 md:p-12 shadow-xl backdrop-blur-md dark:border-emerald-500/25 dark:bg-[#071914]/80"
        >
          <TextGenerateEffect
            text="Architecture Highlights & Technical Specs"
            as="h2"
            className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          />
          <TextGenerateEffect
            text="Core backend architecture, database modeling, and security implementation"
            as="p"
            delay={0.1}
            className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 font-mono"
          />

          <div className="mt-6 sm:mt-7 space-y-3 sm:space-y-4">
            {project.architectureHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 rounded-2xl border border-slate-200/60 bg-slate-50/70 p-3.5 sm:p-5 transition-all dark:border-white/5 dark:bg-white/[0.03] hover:border-emerald-500/40"
              >
                <div className="mt-0.5 sm:mt-1 flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <TextGenerateEffect
                  text={highlight}
                  as="p"
                  delay={0.15 + idx * 0.05}
                  className="text-xs sm:text-base md:text-lg leading-relaxed text-slate-700 dark:text-slate-200"
                />
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 sm:mt-9 pt-6 sm:pt-7 border-t border-slate-200/80 dark:border-white/10">
            <TextGenerateEffect
              text="Technology Stack Used"
              as="h3"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
            />
            <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-2 sm:gap-2.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 font-mono text-xs sm:text-sm font-semibold text-slate-700 shadow-sm dark:border-emerald-500/30 dark:bg-[#05130e] dark:text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Pagination: Next & Previous Projects */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/70 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md dark:border-white/10 dark:bg-[#071914]/70 dark:hover:border-emerald-400"
          >
            <span className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 group-hover:text-emerald-500">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Previous Project
            </span>
            <span className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group flex flex-col justify-between text-right rounded-2xl border border-slate-200/80 bg-white/70 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md dark:border-white/10 dark:bg-[#071914]/70 dark:hover:border-emerald-400"
          >
            <span className="flex items-center justify-end gap-2 text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-500 group-hover:text-emerald-500">
              Next Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-500 transition-colors">
              {nextProject.title}
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

