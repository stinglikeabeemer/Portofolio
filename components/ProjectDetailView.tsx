"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  UserCheck,
  Terminal,
  Sun,
  Moon,
  Github,
  Layers,
  Sparkles,
  Code2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ProjectItem, portfolioData } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease },
};

export function ProjectDetailView({ project }: { project: ProjectItem }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  const allProjects = portfolioData.projects;
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const facts = [
    { icon: UserCheck, label: "Role", value: project.role },
    { icon: Calendar, label: "Timeline", value: project.period },
    { icon: Terminal, label: "Type", value: project.category },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Sticky header with reading progress */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-emerald-500/15 dark:bg-[#061410]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="group inline-flex min-w-0 items-center gap-2 rounded-full py-1 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-emerald-500 transition-transform group-hover:-translate-x-1" />
            <span className="sm:hidden">Back</span>
            <span className="hidden sm:inline">Back to Portfolio</span>
          </Link>

          <nav
            aria-label="Breadcrumb"
            className="hidden min-w-0 items-center gap-2 font-mono text-xs text-slate-400 dark:text-slate-500 md:flex"
          >
            <Link href="/" className="hover:text-emerald-500">Portfolio</Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-emerald-500">Projects</Link>
            <span>/</span>
            <span className="truncate font-semibold text-emerald-600 dark:text-emerald-400">{project.title}</span>
          </nav>

          {/* Compact title on mobile */}
          <span className="truncate font-display text-sm font-bold text-slate-900 dark:text-white md:hidden">
            {project.title}
          </span>

          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-emerald-300 dark:hover:border-emerald-400"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 dark:hidden" />
          </button>
        </div>
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400"
        />
      </header>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative">
        {/* Project-tinted ambient wash */}
        <div className={`pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br ${project.accentColor} opacity-40 blur-3xl dark:opacity-60`} />
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern [background-size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-16 lg:px-8 lg:pb-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Title column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
              className="lg:col-span-7"
            >
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
                Case Study · {String(currentIndex + 1).padStart(2, "0")} / {String(allProjects.length).padStart(2, "0")}
              </p>

              <TextGenerateEffect
                text={project.title}
                as="h1"
                once
                className="mt-4 font-serif text-5xl font-normal leading-[0.95] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl"
              />
              <p className="mt-3 text-lg font-semibold text-emerald-700 dark:text-emerald-400 sm:text-xl">
                {project.subtitle}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-500 sm:text-base"
                  >
                    <Github className="h-4 w-4" />
                    View Repository
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-500/30 dark:bg-white/5 dark:text-slate-200 dark:hover:text-emerald-300 sm:text-base"
                  >
                    Live Application
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>

            {/* Project facts card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="lg:col-span-5 lg:pt-8"
            >
              <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/85 sm:p-6">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  {facts.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {label}
                        </dt>
                        <dd className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-slate-100">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 border-t border-slate-200/70 pt-5 dark:border-white/10">
                  <p className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                    Key Focus
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {project.featureHighlight}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <main className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        {/* ── ARCHITECTURE DIAGRAM ─────────────────────────── */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 dark:border-emerald-500/20 dark:bg-[#071914] dark:shadow-black/40"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-slate-200/80 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-[#05130e]">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="truncate font-mono text-xs text-slate-500 dark:text-slate-400">
              {project.id}/architecture.svg
            </span>
          </div>
          <div className="bg-[#071914] p-3 sm:p-6 md:p-10">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-4xl">
              <Image
                src={project.image}
                alt={`${project.title} system architecture diagram`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>
          </div>
          <figcaption className="flex items-center gap-2 border-t border-slate-200/80 px-4 py-3 font-mono text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
            <Code2 className="h-3.5 w-3.5 text-emerald-500" />
            System &amp; architecture overview
          </figcaption>
        </motion.figure>

        {/* ── HIGHLIGHTS + STACK ───────────────────────────── */}
        <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-12 lg:gap-12">
          <section className="lg:col-span-8">
            <motion.div {...reveal}>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
                Engineering
              </p>
              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                What I built &amp; how it fits together
              </h2>
            </motion.div>

            <ol className="mt-8 space-y-4">
              {project.architectureHighlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: Math.min(idx, 4) * 0.05 }}
                  className="group flex gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-4 transition-colors hover:border-emerald-500/40 dark:border-white/[0.07] dark:bg-white/[0.025] dark:hover:border-emerald-400/30 sm:gap-5 sm:p-5"
                >
                  <span className="font-mono text-sm font-bold text-emerald-600/70 transition-colors group-hover:text-emerald-500 dark:text-emerald-400/60 sm:text-base">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
                    {highlight}
                  </p>
                </motion.li>
              ))}
            </ol>
          </section>

          <motion.aside {...reveal} className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md dark:border-emerald-500/20 dark:bg-[#081a14]/85 sm:p-6 lg:sticky lg:top-24">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <Layers className="h-4 w-4 text-emerald-500" />
                Tech Stack
                <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-700 dark:text-emerald-300">
                  {project.techStack.length}
                </span>
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 font-mono text-xs font-medium text-slate-700 dark:border-emerald-500/20 dark:bg-[#05130e] dark:text-emerald-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
                >
                  <span className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Source code
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </motion.aside>
        </div>

        {/* ── PREV / NEXT ──────────────────────────────────── */}
        <nav aria-label="More projects" className="mt-16 border-t border-slate-200/80 pt-10 dark:border-white/10 sm:mt-24">
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
            Keep exploring
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { p: prevProject, label: "Previous", dir: "prev" as const },
              { p: nextProject, label: "Next", dir: "next" as const },
            ].map(({ p, label, dir }) => (
              <Link
                key={dir}
                href={`/projects/${p.id}`}
                className={`group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/70 p-3 pr-5 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:shadow-lg dark:border-white/10 dark:bg-[#071914]/70 dark:hover:border-emerald-400 ${
                  dir === "next" ? "sm:flex-row-reverse sm:pl-5 sm:pr-3 sm:text-right" : ""
                }`}
              >
                <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-[#071914] sm:h-20 sm:w-32">
                  <Image src={p.image} alt="" fill sizes="128px" className="object-contain p-1" />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className={`flex items-center gap-1.5 font-mono text-xs text-slate-400 group-hover:text-emerald-500 dark:text-slate-500 ${
                      dir === "next" ? "sm:justify-end" : ""
                    }`}
                  >
                    {dir === "prev" && <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />}
                    {label}
                    {dir === "next" && <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />}
                  </span>
                  <span className="mt-1 block truncate font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                    {p.title}
                  </span>
                  <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{p.subtitle}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </main>
    </div>
  );
}
