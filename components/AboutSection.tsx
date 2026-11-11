"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Server, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-20 scroll-mt-24">
      {/* Subtle ambient green glow in the background */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              01 // PROFILE &amp; ACADEMIC FOUNDATION
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
            Focusing on clean architecture, API reliability, SQL/NoSQL schema modeling, and production readiness.
          </p>
        </div>

        {/* Bento Grid: Narrative + IPB Education + Key Metrics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Narrative Card */}
          <motion.div
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] sm:p-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300">
                <Server className="h-3.5 w-3.5" />
                <span>Backend Engineering &amp; System Analysis</span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                Engineering Resilient, Secure, and Scalable Backend Architectures
              </h3>

              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {personal.summary}
              </p>

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {[
                  "RESTful API Architecture (Laravel 12 & FastAPI)",
                  "Multi-Role Authentication (RBAC, Sanctum & RLS)",
                  "SQL (PostgreSQL/MySQL) & NoSQL (MongoDB) Modeling",
                  "AI (Gemini API) & Computer Vision (OpenCV) Pipelines",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200/60 bg-slate-50/70 p-3 text-xs font-medium text-slate-700 dark:border-emerald-500/15 dark:bg-[#05130e]/70 dark:text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-slate-200/70 pt-6 dark:border-emerald-500/15 sm:grid-cols-4">
              {personal.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-3.5 dark:border-emerald-500/15 dark:bg-[#05130e]/70"
                >
                  <p className="font-display text-lg font-extrabold text-emerald-500 dark:text-emerald-400 sm:text-xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Coursework Bento Card */}
          <motion.div
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-gradient-to-br from-emerald-500/5 via-white/90 to-teal-500/5 p-7 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:from-[#09221a]/95 dark:via-[#081a14]/90 dark:to-[#05130e]/95 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] sm:p-8"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-600 dark:bg-amber-500/15 dark:text-amber-300">
                  <GraduationCap className="h-4 w-4" />
                  <span>Academic Record</span>
                </div>
                <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {personal.education.period}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">
                  {personal.education.university}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {personal.education.degree}
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>GPA: {personal.education.gpa}</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  <Code2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {personal.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-lg border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 dark:border-emerald-500/15 dark:bg-[#05130e]/70 dark:text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4">
              <p className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                // CURRENT OBJECTIVE
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                Seeking a <strong>Backend Developer / Software Engineering Internship</strong> to contribute to production-grade API architecture and resilient database systems.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
