"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Timeline } from "@/components/Timeline";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export function ExperienceSection() {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <TextGenerateEffect
            text="03 LEADERSHIP & ORGANIZATIONAL TRACK RECORD"
            as="span"
            className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-emerald-400 block"
          />
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            <TextGenerateEffect text="Organizational Experience" as="span" delay={0.1} />
          </h2>
        </motion.div>

        {/* 3D Interactive Shuffle Card Deck */}
        <Timeline items={experience} />

        {/* Honors & Achievements Subsection */}
        <div id="achievements" className="mt-20 pt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-500 shadow-md shadow-amber-500/10">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <TextGenerateEffect
                  text="Honors & Achievements"
                  as="h3"
                  className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white"
                />
                <TextGenerateEffect
                  text="Scholarships and competition awards across national and international levels"
                  as="p"
                  delay={0.1}
                  className="font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-md transition-all hover:border-amber-500/50 dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-600 dark:text-amber-300">
                      {ach.year}
                    </span>
                    <Award className="h-5 w-5 text-amber-500" />
                  </div>
                  <h4 className="mt-3.5 font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {ach.organizer}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-200/60 pt-3.5 dark:border-emerald-500/15">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-emerald-400">
                    ★ {ach.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
