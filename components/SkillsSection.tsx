"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Database, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SkillBadge } from "@/components/SkillBadge";

export function SkillsSection() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & APIs":
        return <Server className="h-5 w-5 text-emerald-400" />;
      case "Databases":
        return <Database className="h-5 w-5 text-cyan-400" />;
      default:
        return <Cpu className="h-5 w-5 text-teal-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Entrance & Exit */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              TECHNICAL ARSENAL &amp; STACK
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Skills &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Competencies
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
            Technical specialization for engineering resilient RESTful APIs, distributed database schemas, and AI/CV pipelines.
          </p>
        </motion.div>

        {/* Bento Category Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {skills.map((group, groupIdx) => {
            const colSpan =
              group.category === "Tools & CV"
                ? "lg:col-span-12"
                : "lg:col-span-6";

            const innerGridCols =
              group.category === "Tools & CV"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2";

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`${colSpan} rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] sm:p-8`}
              >
                <div className="mb-6 flex flex-col justify-between gap-2 border-b border-slate-200/70 pb-4 dark:border-emerald-500/15 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-emerald-500/20 dark:bg-[#05130e]/80">
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
                  <span className="self-start rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs font-semibold text-slate-600 dark:border-emerald-500/25 dark:bg-[#05130e]/90 dark:text-emerald-300 sm:self-center">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
