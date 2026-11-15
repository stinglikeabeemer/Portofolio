"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillItem } from "@/data/portfolio";

interface SkillBadgeProps {
  skill: SkillItem;
  accent?: string;
  index?: number;
}

export function SkillBadge({
  skill,
  accent = "violet",
  index = 0,
}: SkillBadgeProps) {
  const accentStyles: Record<
    string,
    { border: string; badge: string; dot: string }
  > = {
    violet: {
      border:
        "hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-[0_8px_30px_-8px_rgba(16,185,129,0.3)]",
      badge:
        "bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-400/30",
      dot: "bg-emerald-400",
    },
    cyan: {
      border:
        "hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_8px_30px_-8px_rgba(6,182,212,0.3)]",
      badge:
        "bg-cyan-500/10 text-cyan-700 border-cyan-500/25 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30",
      dot: "bg-cyan-400",
    },
    amber: {
      border:
        "hover:border-teal-500/50 dark:hover:border-teal-400/50 hover:shadow-[0_8px_30px_-8px_rgba(20,184,166,0.3)]",
      badge:
        "bg-teal-500/10 text-teal-700 border-teal-500/25 dark:bg-teal-500/15 dark:text-teal-300 dark:border-teal-400/30",
      dot: "bg-teal-400",
    },
  };

  const currentStyle = accentStyles[accent] || accentStyles.violet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.04, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`group relative flex w-full h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-3.5 sm:p-4 backdrop-blur-sm transition-all duration-300 dark:border-emerald-500/20 dark:bg-[#05130e]/80 ${currentStyle.border}`}
    >
      <div className="flex items-center justify-between gap-1.5 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${currentStyle.dot} transition-transform duration-300 group-hover:scale-125 shadow-[0_0_8px_currentColor]`}
          />
          <h4 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {skill.name}
          </h4>
        </div>
        <span
          className={`shrink-0 rounded-full border px-1.5 sm:px-2 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${currentStyle.badge}`}
        >
          {skill.level}
        </span>
      </div>

      <p className="mt-2.5 font-mono text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-300">
        {skill.tag}
      </p>
    </motion.div>
  );
}
