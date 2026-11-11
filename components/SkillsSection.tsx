"use client";

import React from "react";
import { Server, Database, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SkillBadge } from "@/components/SkillBadge";

export function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & APIs":
        return <Server className="h-5 w-5 text-violet-500" />;
      case "Databases":
        return <Database className="h-5 w-5 text-cyan-500" />;
      default:
        return <Cpu className="h-5 w-5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
              02 // TECHNICAL ARSENAL &amp; STACK
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Skills &amp;{" "}
              <span className="bg-gradient-to-r from-violet-600 via-cyan-500 to-amber-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-cyan-300 dark:to-amber-300">
                Competencies
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
            Technical specialization for engineering resilient RESTful APIs, distributed database schemas, and AI/CV pipelines.
          </p>
        </div>

        {/* Bento Category Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {skills.map((group) => {
            const colSpan =
              group.category === "Tools & CV"
                ? "lg:col-span-12"
                : "lg:col-span-6";

            const innerGridCols =
              group.category === "Tools & CV"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2";

            return (
              <div
                key={group.category}
                className={`${colSpan} rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-[#0c0e22]/85 sm:p-8`}
              >
                <div className="mb-6 flex flex-col justify-between gap-2 border-b border-slate-200/70 pb-4 dark:border-white/10 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="self-start rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:self-center">
                    {group.skills.length} Technologies
                  </span>
                </div>

                <div className={`grid gap-3.5 ${innerGridCols}`}>
                  {group.skills.map((skill, idx) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      accent={group.accent}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
