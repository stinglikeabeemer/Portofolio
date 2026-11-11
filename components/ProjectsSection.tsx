"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/3 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              03 // FEATURED ENGINEERING WORK
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Featured{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
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
