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
import { InteractivePortrait } from "@/components/InteractivePortrait";

export function AboutSkillsSection() {
  const { personal, skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frameworks & APIs":
        return <Server className="h-5 w-5 text-emerald-400" />;
      case "Databases":
        return <Database className="h-5 w-5 text-cyan-400" />;
      default:
        return <Cpu className="h-5 w-5 text-teal-400" />;
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
            <TextGenerateEffect
              text="ABOUT ME"
              as="span"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-emerald-400 block"
            />
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              <TextGenerateEffect text="Profile & Tech Stack" as="span" delay={0.1} />
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 md:text-right">
            Backend-first engineer who also ships the frontend — from schema design to deployed APIs.
          </p>
        </motion.div>

        {/* Unified Bento Grid: Left (Profile & Academics) | Right (Tech Arsenal) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          {/* Left Card: Profile & Academic Foundation (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 lg:sticky lg:top-24 flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 sm:p-8 md:p-9 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] overflow-hidden group"
          >
            {/* HUD Cyber Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400/50 rounded-br-2xl pointer-events-none" />

            <div>
              {/* Badges Header */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 sm:px-3.5 py-1 sm:py-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  IPB University
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 sm:px-3.5 py-1 sm:py-1.5 font-mono text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <Terminal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-400" />
                  Software Engineering · {personal.education.period}
                </span>
              </div>

              {/* Title */}
              <TextGenerateEffect
                text="Raden Mas Galih Pradityo"
                as="h3"
                className="mt-5 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white"
              />
              <TextGenerateEffect
                text="Backend & API Architecture Specialist"
                as="p"
                delay={0.1}
                className="mt-1.5 font-mono text-xs sm:text-sm md:text-base font-semibold text-emerald-600 dark:text-emerald-400"
              />

              {/* Interactive Portrait (Iron Man Helmet Mask + Galih Real Face Reveal on Hover) */}
              <InteractivePortrait
                baseImage="/images/ironman.jpg"
                revealImage="/images/galih.jpg"
                alt="Raden Mas Galih Pradityo"
                spotlightRadius={55}
              />

              {/* Clean Concise Bio */}
              <p className="text-sm sm:text-base md:text-[17px] leading-relaxed text-slate-600 dark:text-slate-300">
                I design RESTful APIs, relational and document database schemas, and AI integrations
                with Laravel and FastAPI — built to be secure, maintainable, and easy for frontend
                and mobile teams to consume.
              </p>

              {/* Quick Focus Points */}
              <div className="mt-6 space-y-3">
                {[
                  "RESTful API & Microservices with Laravel 12 & FastAPI",
                  "Multi-Role Security (RBAC, Sanctum & PostgreSQL RLS)",
                  "SQL & NoSQL Schemas (PostgreSQL, MySQL, MongoDB)",
                  "AI & Computer Vision Integration (Gemini API & OpenCV)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-emerald-500 dark:text-emerald-400 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 border-t border-slate-200/70 pt-6 dark:border-emerald-500/15">
              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-2 sm:p-3.5 md:p-4 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-2xl md:text-3xl font-black text-emerald-500 dark:text-emerald-400">
                  3.80
                </p>
                <p className="mt-1 font-mono text-[10px] sm:text-xs md:text-[13px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-tight sm:tracking-wider">
                  GPA / 4.00
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-2 sm:p-3.5 md:p-4 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-2xl md:text-3xl font-black text-teal-400">
                  5+
                </p>
                <p className="mt-1 font-mono text-[11px] sm:text-xs md:text-[13px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/60 bg-slate-50/80 p-2 sm:p-3.5 md:p-4 text-center dark:border-emerald-500/15 dark:bg-[#05130e]/70">
                <p className="font-display text-lg sm:text-2xl md:text-3xl font-black text-cyan-400">
                  YPLI
                </p>
                <p className="mt-1 font-mono text-[10px] sm:text-xs md:text-[13px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-tight sm:tracking-wider">
                  Scholar &apos;26
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Bento Grid: Core Technical Stack (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {skills.map((group, groupIdx) => {
              const gridColsClass =
                group.skills.length === 3
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5"
                  : "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5";

              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-slate-200/80 bg-white/80 p-4.5 sm:p-6 md:p-7 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/90 overflow-hidden group"
                >
                  {/* HUD Cyber Corner Accents */}
                  <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-emerald-400/40 rounded-tr-xl pointer-events-none transition-colors group-hover:border-emerald-400" />
                  <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-emerald-400/40 rounded-bl-xl pointer-events-none transition-colors group-hover:border-emerald-400" />
                  <div className="pb-3 sm:pb-3.5 border-b border-slate-200/60 dark:border-white/5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                          {getCategoryIcon(group.category)}
                        </div>
                        <TextGenerateEffect
                          text={group.category}
                          as="h4"
                          className="font-display text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white"
                        />
                      </div>

                      <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 sm:px-3 py-1 font-mono text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {group.skills.length} Technologies
                      </span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm font-mono leading-relaxed text-slate-500 dark:text-slate-400">
                      {group.subtitle}
                    </p>
                  </div>

                  <div className={`mt-4 ${gridColsClass}`}>
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
