"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Database,
  Cpu,
  MapPin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const hudNavLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "CONTACT", href: "#contact" },
];

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Framed Glassmorphic HUD Container inspired by Landing Page.jpg & Landing Page Reference.jpg */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-br from-white/95 via-slate-50/90 to-violet-50/50 p-6 shadow-2xl dark:border-white/15 dark:from-[#0b0d20]/95 dark:via-[#080a18]/95 dark:to-[#13112c]/95 sm:p-10 lg:p-14"
        >
          {/* Ambient Background Glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl dark:bg-violet-600/25" />
          <div className="pointer-events-none absolute -bottom-28 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/20" />
          <div className="pointer-events-none absolute right-10 top-12 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-500/15" />

          {/* Subtle Inner Frame Border (from Landing Page.jpg) */}
          <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-slate-300/40 dark:border-white/10 sm:inset-4" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left Column: S-Rank Header, Name, Role, Description & Dual CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* S-Rank / Specialist Status Badge (from Solo Leveling Reference) */}
              <motion.div
                initial={false}
                whileHover={{ scale: 1.02 }}
                className="inline-flex flex-wrap items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md dark:border-amber-400/30 dark:bg-amber-500/10"
              >
                <span className="font-display text-base font-black italic tracking-wider text-amber-600 dark:text-amber-400">
                  S-RANK
                </span>
                <span className="h-3.5 w-[1px] bg-amber-500/40" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-700 dark:text-amber-100/90">
                  Backend &amp; API Architect
                </span>
              </motion.div>

              {/* Main Name & Headline */}
              <div className="space-y-3">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-400">
                  {personal.title}
                </p>
                <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.08]">
                  Raden Mas{" "}
                  <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-cyan-300 dark:to-amber-300">
                    Galih Pradityo
                  </span>
                </h1>
                <p className="text-base font-semibold text-slate-700 dark:text-slate-200 sm:text-lg">
                  {personal.role}
                </p>
              </div>

              {/* Narrative Description */}
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300/90 sm:text-base">
                Engineering high-throughput backend systems with{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Laravel 12 &amp; FastAPI
                </span>
                , resilient database schemas across{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  PostgreSQL (RLS), MySQL, &amp; MongoDB
                </span>
                , and intelligent pipelines using{" "}
                <span className="font-semibold text-slate-900 dark:text-white">
                  Google Gemini AI &amp; Computer Vision (OpenCV)
                </span>
                . Dedicated to clean architecture, multi-role authentication, and
                production-grade API reliability.
              </p>

              {/* Quick Architecture Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <ShieldCheck className="h-3.5 w-3.5 text-violet-500" />
                  Sanctum &amp; RBAC Security
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <Database className="h-3.5 w-3.5 text-cyan-500" />
                  SQL &amp; NoSQL Modeling
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  <Cpu className="h-3.5 w-3.5 text-amber-500" />
                  AI &amp; OpenCV Integration
                </span>
              </div>

              {/* Dual CTA Buttons (Download Resume & View Projects) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/CV_Raden Mas Galih Pradityo.pdf"
                  download="CV_Raden Mas Galih Pradityo.pdf"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600 hover:shadow-violet-600/30 dark:bg-white dark:text-slate-950 dark:shadow-white/10 dark:hover:bg-violet-500 dark:hover:text-white"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 rounded-full border-2 border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-bold text-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500 hover:text-violet-600 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-violet-400 dark:hover:bg-violet-500/15"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Bottom Left Meta & Social Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-6 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-violet-500" />
                  <span>{personal.location}</span>
                  <span className="mx-1">•</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">
                    GPA {personal.education.gpa}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={`mailto:${personal.email}`}
                    aria-label="Email Galih"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-violet-500 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Architecture Graphic (<Image/>) + Vertical HUD Spine from Reference */}
            <div className="relative lg:col-span-5 flex items-center justify-between gap-4">
              {/* Main Hero Architecture Visual using Next.js <Image /> */}
              <motion.div
                initial={false}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950/90 p-2 shadow-2xl dark:border-violet-500/25"
              >
                <Image
                  src={personal.avatarImage}
                  alt="Raden Mas Galih Pradityo - Backend & API System Architecture"
                  width={640}
                  height={720}
                  priority
                  className="h-auto w-full rounded-xl object-cover"
                />
              </motion.div>

              {/* Right-Side Vertical HUD Spine (inspired by Landing Page Reference.jpg) */}
              <div className="hidden xl:flex flex-col items-end justify-center gap-4 pl-2">
                <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-violet-500/60" />
                {hudNavLinks.map((item, idx) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-2.5 text-right"
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[0.2em] transition-all ${
                        idx === 0
                          ? "font-bold text-violet-600 dark:text-white"
                          : "text-slate-400 group-hover:text-violet-500 dark:text-slate-400 dark:group-hover:text-violet-300"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`h-2 w-2 rotate-45 border transition-all ${
                        idx === 0
                          ? "border-amber-400 bg-amber-400 shadow-[0_0_8px_#f59e0b]"
                          : "border-violet-400/60 bg-transparent group-hover:border-violet-400 group-hover:bg-violet-400"
                      }`}
                    />
                  </a>
                ))}
                <div className="h-10 w-[1px] bg-gradient-to-t from-transparent to-violet-500/60" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
