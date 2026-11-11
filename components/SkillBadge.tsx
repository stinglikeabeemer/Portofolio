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
}: SkillBadgeProps) {
  const accentStyles: Record<
    string,
    { border: string; badge: string; dot: string }
  > = {
    violet: {
      border:
        "hover:border-violet-500/50 dark:hover:border-violet-400/50 hover:shadow-[0_8px_30px_-8px_rgba(124,58,237,0.28)]",
      badge:
        "bg-violet-500/10 text-violet-700 border-violet-500/25 dark:bg-violet-500/15 dark:text-violet-300 dark:border-violet-400/30",
      dot: "bg-violet-500",
    },
    cyan: {
      border:
        "hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_8px_30px_-8px_rgba(6,182,212,0.28)]",
      badge:
        "bg-cyan-500/10 text-cyan-700 border-cyan-500/25 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-400/30",
      dot: "bg-cyan-500",
    },
    amber: {
      border:
        "hover:border-amber-500/50 dark:hover:border-amber-400/50 hover:shadow-[0_8px_30px_-8px_rgba(245,158,11,0.28)]",
      badge:
        "bg-amber-500/10 text-amber-700 border-amber-500/25 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-400/30",
      dot: "bg-amber-500",
    },
  };

  const currentStyle = accentStyles[accent] || accentStyles.violet;

  return (
    <motion.div
      initial={false}
      whileHover={{ y: -4 }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-4 backdrop-blur-sm transition-all duration-300 dark:border-white/10 dark:bg-white/[0.04] ${currentStyle.border}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span
            className={`h-2 w-2 rounded-full ${currentStyle.dot} transition-transform duration-300 group-hover:scale-125`}
          />
          <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white sm:text-base">
            {skill.name}
          </h4>
        </div>
        <span
          className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${currentStyle.badge}`}
        >
          {skill.level}
        </span>
      </div>

      <p className="mt-2.5 font-mono text-xs leading-relaxed text-slate-500 dark:text-slate-400">
        {skill.tag}
      </p>
    </motion.div>
  );
}
