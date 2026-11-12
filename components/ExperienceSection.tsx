"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Timeline } from "@/components/Timeline";

export function ExperienceSection() {
  const { experience, achievements } = portfolioData;

  return (
    <section id="experience" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Entrance & Exit */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              03 // LEADERSHIP &amp; ORGANIZATIONAL TRACK RECORD
            </span>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Organizational{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs text-slate-500 dark:text-slate-400">
            Leadership experience, operational logistics management, and strategic corporate sponsorships at IPB University.
          </p>
        </motion.div>

        {/* Responsive Vertical Timeline */}
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
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-500">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900 dark:text-white">
                  Honors &amp; Achievements
                </h3>
                <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Scholarships and competition awards across national and international levels
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/85 p-5 shadow-sm backdrop-blur-md transition-all hover:border-amber-500/50 dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-300">
                      {ach.year}
                    </span>
                    <Award className="h-4 w-4 text-amber-500" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-bold text-slate-900 dark:text-white">
                    {ach.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {ach.organizer}
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-200/60 pt-3 dark:border-emerald-500/15">
                  <span className="font-mono text-[11px] font-semibold text-emerald-400">
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
