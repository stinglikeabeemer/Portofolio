"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { ExperienceItem } from "@/data/portfolio";

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative mx-auto max-w-3xl pt-2">
      {/* Top Deck Navigation & Counter Bar */}
      <div className="mb-6 flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="flex items-baseline gap-1 font-mono">
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              0{activeIndex + 1}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">/ 0{items.length}</span>
          </div>
        </div>

        {/* Indicators Dots + Navigation Buttons */}
        <div className="flex items-center gap-3">
          {/* Card Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Jump to experience ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-emerald-500 shadow-[0_0_8px_#10B981]"
                    : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous experience card"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-[#071914]/90 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-300 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next experience card"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-700 shadow-md backdrop-blur-md transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-[#071914]/90 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:bg-emerald-500/20 dark:hover:text-emerald-300 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Stacked Card Deck Container */}
      <div className="relative min-h-[470px] sm:min-h-[420px] w-full select-none">
        {items.map((item, idx) => {
          // Relative position in cyclic deck: 0 = active, 1 = behind 1, 2 = behind 2
          const offset = (idx - activeIndex + items.length) % items.length;
          const isActive = offset === 0;

          // Compute style transforms based on stack depth
          const scale = offset === 0 ? 1 : offset === 1 ? 0.95 : 0.9;
          const y = offset === 0 ? 0 : offset === 1 ? 16 : 32;
          const rotate = offset === 0 ? 0 : offset === 1 ? 1.5 : -1.5;
          const opacity = offset === 0 ? 1 : offset === 1 ? 0.7 : 0.4;
          const zIndex = 30 - offset * 10;

          return (
            <motion.div
              key={item.id}
              animate={{
                scale,
                y,
                rotate,
                opacity,
                zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 340,
                damping: 28,
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) handleNext();
                else if (info.offset.x > 60) handlePrev();
              }}
              className={`absolute inset-x-0 top-0 cursor-grab active:cursor-grabbing rounded-3xl border border-slate-200/80 bg-white/95 p-6 sm:p-8 md:p-9 shadow-xl backdrop-blur-xl transition-colors duration-300 dark:border-emerald-500/25 dark:bg-[#081a14]/95 dark:shadow-[0_16px_50px_rgba(4,13,10,0.6)] ${
                !isActive ? "pointer-events-none" : ""
              }`}
            >
              {/* HUD Cyber Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400/50 rounded-br-2xl pointer-events-none" />

              {/* Card Header: Role Pill & Period Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-200/60 dark:border-white/10">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300">
                  <Briefcase className="h-4 w-4" />
                  {item.role}
                </span>

                <span className="inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  {item.period}
                </span>
              </div>

              {/* Organization & Leadership Type */}
              <div className="mt-5">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {item.organization}
                </h3>
                <p className="mt-1 font-mono text-xs sm:text-sm font-medium text-amber-500 dark:text-amber-400">
                  {item.type}
                </p>
                <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>

              {/* Bullet Highlights */}
              <ul className="mt-6 space-y-3 border-t border-slate-200/60 pt-5 dark:border-emerald-500/15">
                {item.highlights.map((point, pointIdx) => (
                  <li
                    key={pointIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Card Footer Hint */}
              <div className="mt-6 flex items-center justify-between pt-3 border-t border-slate-200/40 dark:border-white/5">
                <span className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                  Swipe card or tap arrows to shuffle
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-500">
                  {idx + 1} of {items.length}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
