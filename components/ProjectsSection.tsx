"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData, ProjectItem, ProjectTag } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { SideProjects } from "@/components/SideProjects";

type FilterType = "All" | ProjectTag;

const filterTabs: { id: FilterType; label: string }[] = [
  { id: "All", label: "All" },
  { id: "backend", label: "Backend & APIs" },
  { id: "ai", label: "AI & Computer Vision" },
  { id: "fullstack", label: "Full-Stack" },
];

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const matchesFilter = (project: ProjectItem, filter: FilterType): boolean =>
    filter === "All" || project.tags.includes(filter);

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));

  return (
    <section id="projects" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Entrance & Exit */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <TextGenerateEffect
              text="SELECTED WORK"
              as="span"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-emerald-400 block"
            />
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              <TextGenerateEffect text="Featured Projects" as="span" delay={0.1} />
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-right">
            Systems across healthcare, agritech and education — each card links to a full architecture breakdown.
          </p>
        </motion.div>

        {/* Filter Category Tabs with Animated Pill */}
        <div className="mb-10 flex flex-wrap items-center gap-2.5">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            const count = projects.filter((p) => matchesFilter(p, tab.id)).length;
            return (
              <button
                key={tab.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-white"
                    : "border border-slate-200/80 bg-white/70 text-slate-600 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-[#05130e]/80 dark:text-slate-300 dark:hover:text-emerald-400"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectFilter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md shadow-emerald-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  {tab.label}
                  <span className={`ml-1.5 ${isActive ? "text-white/75" : "text-slate-400 dark:text-slate-500"}`}>
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Smooth Layout Transitions */}
        <motion.div layout className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = filteredProjects.length % 2 !== 0 && index === 0;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  featured={isFeatured}
                />
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Secondary showcase: projects outside the backend/full-stack focus */}
        <SideProjects />
      </div>
    </section>
  );
}
