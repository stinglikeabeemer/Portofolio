"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
              03 // FEATURED ENGINEERING WORK
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-cyan-300 dark:to-emerald-300">
                Projects
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
            Production backend systems, AI &amp; Computer Vision pipelines, and robust SQL/NoSQL database architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
