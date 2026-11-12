"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Cpu,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SkillBadge } from "@/components/SkillBadge";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export function AboutSkillsSection() {
  const { personal, skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend & APIs":
        return <Server className="h-4 w-4 text-emerald-400" />;
      case "Databases":
        return <Database className="h-4 w-4 text-cyan-400" />;
      default:
        return <Cpu className="h-4 w-4 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="relative py-20 scroll-mt-24">
      {/* Subtle ambient green glow */}
      <div className="pointer-events-none absolute left-1/4 top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-80 w-80 rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              01 // PROFILE &amp; TECH STACK
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              About &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Technical Stack
              </span>
            </h2>
          </div>
          <TextGenerateEffect
            text="Specializing in resilient RESTful APIs, high-integrity database schemas, and AI/CV backend pipelines."
            as="p"
            className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400"
          />
        </motion.div>

        {/* Unified Bento Grid: Left (Profile & Academics) | Right (Tech Arsenal) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-stretch">
          {/* Left Card: Profile & Academic Foundation (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)]"
          >
            <div>
              {/* Badges Header */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  <GraduationCap className="h-3.5 w-3.5" />
                  IPB University
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 font-mono text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  Software Engineering
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">
                Raden Mas Galih Pradityo
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                // Backend &amp; API Architecture Specialist
              </p>

              {/* Clean Concise Bio */}
              <TextGenerateEffect
                text="5th-semester Software Engineering student at IPB University with strong expertise in architecting scalable RESTful APIs, relational/document database schemas, and seamless AI integrations."
                as="p"
                delay={0.15}
                className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              />

              {/* Quick Focus Points */}
              <div className="mt-6 space-y-2.5">
                {[
                  "RESTful API & Microservices with Laravel 12 & FastAPI",
                  "Multi-Role Security (RBAC, Sanctum & PostgreSQL RLS)",
                  "SQL & NoSQL Schemas (PostgreSQL, MySQL, MongoDB)",
                  "AI & Computer Vision Integration (Gemini API & OpenCV)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-3 gap-2.5 border-t border-slate-200/70 pt-6 dark:border-emerald-500/15">
              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-3 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-xl font-extrabold text-emerald-500 dark:text-emerald-400">
                  3.80
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
                  GPA / 4.00
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-3 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-xl font-extrabold text-teal-400">
                  5+
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
                  Architectures
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-3 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-xl font-extrabold text-cyan-400">
                  1st
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase">
                  Technofest &apos;25
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Grid: Core Technical Stack (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {skills.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-3xl border border-slate-200/80 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                      {getCategoryIcon(group.category)}
                    </div>
                    <div>
                      <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h4>
                      <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    {group.skills.length} Technologies
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      accent={group.accent}
                      index={skillIdx}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
