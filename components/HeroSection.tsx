"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#hero", active: true },
  { label: "Profiles", href: "#about" },
  { label: "Heroes", href: "#projects" },
  { label: "About", href: "#experience" },
];

export function HeroSection() {
  const { personal } = portfolioData;
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden"
    >
      {/* Background: Raw Full HD Julian.jpg fills the entire screen edge-to-edge */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/julian.jpg"
          alt="Galih Pradityo — Backend Architect Portfolio"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Deep, multi-stop gradient transition that dissolves seamlessly into the next section with zero visible line */}
        <div className="absolute inset-x-0 bottom-0 h-96 sm:h-[460px] lg:h-[540px] bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent dark:from-[#061410] dark:from-25% dark:via-[#061410]/95 dark:via-55% dark:via-[#061410]/50 dark:via-75% dark:to-transparent pointer-events-none" />
      </div>

      {/* TOP BAR (Full Width Header right on the background) */}
      <div className="relative z-30 flex items-center justify-between px-6 sm:px-12 lg:px-16 pt-6 sm:pt-8 md:pt-10">
        {/* Left: Minimalist Geometric Glyph Logo & Nav Links */}
        <div className="flex items-center gap-6 sm:gap-10 md:gap-12">
          <a href="#hero" className="group flex items-center" aria-label="Home">
            <svg
              className="h-8 w-8 text-white transition-transform group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4L28 26H22L16 14.5L10 26H4L16 4Z"
                fill="white"
              />
              <polygon points="16,19 13,25 19,25" fill="#34D399" />
            </svg>
          </a>

          {/* Navigation Links with Active Underline Bar under Home */}
          <nav className="hidden sm:flex items-center gap-7 md:gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative group py-1 text-sm md:text-base font-semibold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] hover:text-emerald-300 transition-colors"
              >
                <span>{item.label}</span>
                {item.active ? (
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
                ) : (
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 rounded-full transition-all group-hover:w-full" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: IPB University Badge, S-Rank Shield, and Theme Toggle */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden xs:block sm:block drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            <p className="font-display text-[11px] sm:text-xs font-black tracking-[0.22em] text-white uppercase">
              IPB UNIVERSITY
            </p>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-widest text-emerald-400 uppercase font-bold">
              SOFTWARE ENGINEERING
            </p>
          </div>

          {/* Metallic S-Rank Shield */}
          <div className="flex items-center gap-1.5 rounded-lg border border-white/40 bg-black/60 backdrop-blur-md px-2.5 py-1.5 shadow-xl">
            <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5V11C4 16.55 7.42 21.74 12 23C16.58 21.74 20 16.55 20 11V5L12 2ZM12 4.18L18 6.43V11C18 15.35 15.44 19.34 12 20.73C8.56 19.34 6 15.35 6 11V6.43L12 4.18Z"/>
              <path d="M12 7L9 11H11V16H13V11H15L12 7Z"/>
            </svg>
            <span className="font-mono font-black text-xs text-white">S-RANK</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/40 bg-black/60 backdrop-blur-md text-emerald-300 hover:text-white hover:border-white/80 transition-all shadow-xl"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 text-emerald-300 dark:hidden" />
          </button>
        </div>
      </div>

      {/* MAIN HERO CONTENT (LEFT-ALIGNED TYPOGRAPHY & LORE BIO) */}
      <div className="relative z-30 my-auto px-6 sm:px-12 lg:px-16 py-8 max-w-2xl lg:max-w-xl xl:max-w-2xl">
        {/* Giant Title: GALIH */}
        <motion.h1
          initial={false}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white uppercase leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        >
          GALIH
        </motion.h1>

        {/* Subtitle: RADEN MAS GALIH PRADITYO */}
        <motion.p
          initial={false}
          className="mt-3 font-display text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        >
          Raden Mas Galih Pradityo
        </motion.p>

        {/* Specialist Tag */}
        <p className="mt-1 font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-300 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          // Backend &amp; API Architecture Specialist
        </p>

        {/* Narrative Bio Paragraph */}
        <motion.p
          initial={false}
          className="mt-4 sm:mt-5 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        >
          Raden Mas Galih Pradityo is a 5th-semester Software Engineering student at
          IPB University (GPA 3.80/4.00) specializing in backend software development,
          API architecture, and database modeling. Proficient in engineering scalable
          RESTful APIs and microservices with Laravel 12 and FastAPI, designing resilient
          SQL/NoSQL databases with PostgreSQL RLS and MongoDB, and deploying intelligent
          Computer Vision pipelines and Google Gemini AI integrations.
        </motion.p>
      </div>

      {/* BOTTOM BAR (Watermarks on Left, Action Pills on Right) */}
      <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 px-6 sm:px-12 lg:px-16 pb-8 sm:pb-12">
        {/* Left Watermark / Handle */}
        <div className="flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] sm:text-xs text-white/90 hover:text-emerald-300 transition-colors tracking-wide"
          >
            linkedin.com/in/galihpradityo
          </a>
          <span className="text-white/60">•</span>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] sm:text-xs text-white/90 hover:text-emerald-300 transition-colors tracking-wide"
          >
            github.com/galihpradityo
          </a>
        </div>

        {/* Right Action Buttons: Download & Play Now */}
        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          <a
            href="/CV_Raden Mas Galih Pradityo.pdf"
            download="CV_Raden Mas Galih Pradityo.pdf"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 active:scale-95 shadow-2xl shadow-black/50"
          >
            Download
          </a>

          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 active:scale-95 shadow-2xl shadow-black/50"
          >
            Play Now
          </a>
        </div>
      </div>
    </section>
  );
}
