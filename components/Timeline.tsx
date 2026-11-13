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
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

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
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="font-mono text-xs sm:text-sm text-slate-400 dark:text-slate-500 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="hidden sm:inline">Scroll horizontally or use arrows (Left to Right)</span>
          <span className="sm:hidden">Swipe or tap arrows</span>
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-white/10 dark:bg-[#071914] dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-white/10 dark:bg-[#071914] dark:text-slate-300 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/10 dark:hover:text-emerald-300"
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
            className="group flex flex-col justify-between w-[85vw] max-w-[340px] sm:w-auto sm:min-w-[380px] sm:max-w-[430px] md:min-w-[420px] md:max-w-[460px] shrink-0 snap-start rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl dark:border-emerald-500/20 dark:bg-[#081a14]/90 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] dark:hover:border-emerald-400/50"
          >
            <div>
              {/* Milestone Node Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200/60 dark:border-white/10">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-700 dark:border-emerald-400/25 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <Briefcase className="h-3.5 w-3.5" />
                  <TextGenerateEffect text={item.role} as="span" />
                </span>

                <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  <TextGenerateEffect text={item.period} as="span" delay={0.05} />
                </span>
              </div>

              {/* Organization & Type */}
              <div className="mt-4">
                <TextGenerateEffect
                  text={item.organization}
                  as="h3"
                  className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors"
                />
                <TextGenerateEffect
                  text={item.type}
                  as="p"
                  delay={0.05}
                  className="mt-1 font-mono text-xs sm:text-sm font-medium text-amber-500 dark:text-amber-400"
                />
              </div>

              {/* Concise Description */}
              <TextGenerateEffect
                text={item.description}
                as="p"
                delay={0.1}
                className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
              />
            </div>

            {/* Key Bullet Highlights (Top 2 for clean readability) */}
            <ul className="mt-5 space-y-2.5 border-t border-slate-200/60 pt-4 dark:border-emerald-500/15">
              {item.highlights.slice(0, 2).map((point, pointIdx) => (
                <li
                  key={pointIdx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-600 dark:text-slate-300/90"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
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
