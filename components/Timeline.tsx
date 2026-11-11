"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase, ChevronRight } from "lucide-react";
import { ExperienceItem } from "@/data/portfolio";

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Spine Line */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-4 top-2 w-[2px] bg-gradient-to-b from-violet-600 via-cyan-500 to-amber-500/40 sm:left-1/2 sm:-translate-x-1/2"
      />

      <div className="space-y-10">
        {items.map((item, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative flex flex-col sm:flex-row sm:items-center ${
                isEven ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Diamond / Node Marker */}
              <div className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-violet-500 bg-white shadow-md shadow-violet-500/30 dark:border-violet-400 dark:bg-[#070814] sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                <span className="h-2.5 w-2.5 rotate-45 bg-violet-600 dark:bg-amber-400" />
              </div>

              {/* Card Container */}
              <div
                className={`w-full pl-12 sm:w-1/2 sm:pl-0 ${
                  isEven ? "sm:pr-10" : "sm:pl-10"
                }`}
              >
                <motion.div
                  initial={false}
                  whileHover={{ y: -4 }}
                  className="group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg dark:border-white/10 dark:bg-[#0c0e22]/90 dark:hover:border-violet-400/50 sm:p-7"
                >
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-violet-700 dark:border-violet-400/25 dark:bg-violet-500/15 dark:text-violet-300">
                      <Briefcase className="h-3 w-3" />
                      {item.role}
                    </span>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5 text-cyan-500" />
                      {item.period}
                    </span>
                  </div>

                  {/* Organization Title & Type */}
                  <div className="mt-3">
                    <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                      {item.organization}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-amber-600 dark:text-amber-400">
                      {item.type}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2 border-t border-slate-200/60 pt-4 dark:border-white/10">
                    {item.highlights.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300/90"
                      >
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
