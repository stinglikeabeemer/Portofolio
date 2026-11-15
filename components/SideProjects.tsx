"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map as MapIcon, Box, Database, ChevronDown, Calendar } from "lucide-react";
import { portfolioData, SideProjectItem } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

const accentStyles = {
  cyan: {
    bar: "from-cyan-400/80 via-cyan-400/20 to-transparent",
    icon: "bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300",
    role: "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-400",
    hover: "hover:border-cyan-500/40 dark:hover:border-cyan-400/30",
    link: "text-cyan-600 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200",
  },
  violet: {
    bar: "from-violet-400/80 via-violet-400/20 to-transparent",
    icon: "bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-300",
    role: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    dot: "bg-violet-400",
    hover: "hover:border-violet-500/40 dark:hover:border-violet-400/30",
    link: "text-violet-600 hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200",
  },
  emerald: {
    bar: "from-emerald-400/80 via-emerald-400/20 to-transparent",
    icon: "bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300",
    role: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-400",
    hover: "hover:border-emerald-500/40 dark:hover:border-emerald-400/30",
    link: "text-emerald-600 hover:text-emerald-500 dark:text-emerald-300 dark:hover:text-emerald-200",
  },
} as const;

const icons = { map: MapIcon, ar: Box, data: Database } as const;

function SideProjectCard({
  project,
  index,
  className = "",
}: {
  project: SideProjectItem;
  index: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const style = accentStyles[project.accent];
  const Icon = icons[project.icon];
  const [firstHighlight, ...moreHighlights] = project.highlights;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-5 sm:p-6 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.025] ${style.hover} ${className}`}
    >
      {/* Thin accent strip marks the card without competing with the main project cards */}
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${style.bar}`} />

      {/* Header: icon, title, period */}
      <div className="flex items-start gap-3.5">
        <div className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl ${style.icon}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-lg sm:text-xl font-bold leading-snug text-slate-900 dark:text-white">
            {project.title}
          </h4>
          <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{project.subtitle}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px] sm:text-xs">
        <span className={`rounded-full border px-2.5 py-0.5 font-semibold ${style.role}`}>{project.role}</span>
        <span className="text-slate-500 dark:text-slate-400">{project.category}</span>
        <span className="inline-flex items-center gap-1 text-slate-400 dark:text-slate-500">
          <Calendar className="h-3 w-3" />
          {project.period}
        </span>
      </div>

      {/* Highlights: first one always visible, the rest on demand */}
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <li className="flex gap-2.5">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
          <span>{firstHighlight}</span>
        </li>
        <AnimatePresence initial={false}>
          {expanded &&
            moreHighlights.map((item) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="flex gap-2.5 overflow-hidden"
              >
                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`} />
                <span>{item}</span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>

      {moreHighlights.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className={`mt-3 inline-flex w-fit items-center gap-1 font-mono text-xs font-semibold transition-colors ${style.link}`}
        >
          {expanded ? "Show less" : `Show ${moreHighlights.length} more`}
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}

      {/* Focus areas & tools pinned to the bottom so all cards line up */}
      <div className="mt-auto pt-5">
        <p className="font-mono text-[11px] sm:text-xs leading-relaxed text-slate-400 dark:text-slate-500">
          {project.focus.join("  ·  ")}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 border-t border-slate-200/60 pt-3.5 dark:border-white/5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-slate-200 bg-slate-100/70 px-2 py-0.5 font-mono text-[11px] sm:text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function SideProjects() {
  const { sideProjects } = portfolioData;
  if (sideProjects.length === 0) return null;

  return (
    <div id="side-projects" className="mt-24 sm:mt-28 scroll-mt-28">
      {/* Divider that visually separates side work from the main showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4">
          <TextGenerateEffect
            text="SIDE QUESTS"
            as="span"
            className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
          />
          <div className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent dark:from-white/15" />
        </div>

        <div className="mt-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Side Projects
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400 md:text-right">
            Work outside my backend focus — data engineering & ML, system analysis, GIS and augmented reality.
          </p>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sideProjects.map((project, idx) => {
          // On 2-column (tablet) layouts, stretch an odd last card so the grid never leaves a gap
          const isOddLast = sideProjects.length % 2 === 1 && idx === sideProjects.length - 1;
          return (
            <SideProjectCard
              key={project.id}
              project={project}
              index={idx}
              className={isOddLast ? "md:col-span-2 lg:col-span-1" : ""}
            />
          );
        })}
      </div>
    </div>
  );
}
