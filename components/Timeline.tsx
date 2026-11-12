"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { ExperienceItem } from "@/data/portfolio";

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {/* Top Controls: Left / Right Navigation Buttons & Hint */}
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Scroll horizontally or use arrows (Left to Right)
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-white/10 dark:bg-[#071914] dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-white/10 dark:bg-[#071914] dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 pt-3 scroll-smooth snap-x snap-mandatory focus:outline-none"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="group flex flex-col justify-between min-w-[300px] sm:min-w-[360px] max-w-[400px] shrink-0 snap-start rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50"
          >
            <div>
              {/* Milestone Node Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/60 dark:border-white/10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <Briefcase className="h-3 w-3" />
                  {item.role}
                </span>

                <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-slate-400">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  {item.period}
                </span>
              </div>

              {/* Organization & Type */}
              <div className="mt-4">
                <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {item.organization}
                </h3>
                <p className="mt-0.5 font-mono text-xs font-medium text-amber-500 dark:text-amber-400">
                  {item.type}
                </p>
              </div>

              {/* Concise Description */}
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
            </div>

            {/* Key Bullet Highlights (Top 2 for clean readability) */}
            <ul className="mt-5 space-y-2 border-t border-slate-200/60 pt-4 dark:border-emerald-500/15">
              {item.highlights.slice(0, 2).map((point, pointIdx) => (
                <li
                  key={pointIdx}
                  className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300/90"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
