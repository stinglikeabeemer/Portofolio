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
        className="absolute bottom-2 left-4 top-2 w-[2px] bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-500/40 sm:left-1/2 sm:-translate-x-1/2"
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
              <div className="absolute left-4 top-6 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-emerald-500 bg-white shadow-md shadow-emerald-500/30 dark:border-emerald-400 dark:bg-[#061410] sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                <span className="h-2.5 w-2.5 rotate-45 bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_#10B981]" />
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
                  className="group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50 sm:p-7"
                >
                  {/* Top Meta Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-500/15 dark:text-emerald-300">
                      <Briefcase className="h-3 w-3" />
                      {item.role}
                    </span>

                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                      {item.period}
                    </span>
                  </div>

                  {/* Organization Title & Type */}
                  <div className="mt-3">
                    <h3 className="font-display text-xl font-extrabold text-slate-900 dark:text-white">
                      {item.organization}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-amber-500 dark:text-amber-400">
                      {item.type}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="mt-4 space-y-2 border-t border-slate-200/60 pt-4 dark:border-emerald-500/15">
                    {item.highlights.map((point, pointIdx) => (
                      <li
                        key={pointIdx}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300/90"
                      >
                        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
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
