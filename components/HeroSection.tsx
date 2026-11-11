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
    <section id="hero" className="relative py-4 sm:py-8 lg:py-10 scroll-mt-24">
      <div className="mx-auto max-w-[1440px] px-2.5 sm:px-6 lg:px-8">
        {/* Exact Layout replica of Landing Page.jpg with raw Julian.jpg artwork */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#0c1813] shadow-2xl border border-white/10 min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] xl:min-h-[820px] flex flex-col justify-between">
          
          {/* Background: Raw Julian.jpg with zero green box overlays */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <Image
              src="/images/julian.jpg"
              alt="Galih Pradityo — Backend Architect Portfolio"
              fill
              priority
              className="object-cover object-center scale-[1.01]"
            />
            {/* Even, subtle full-card ambient darkening for crisp text contrast without any colored box */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          {/* Thin Inset Inner Border Frame (Exact match to Landing Page.jpg) */}
          <div className="pointer-events-none absolute inset-3 sm:inset-5 md:inset-7 rounded-[1.4rem] sm:rounded-[1.8rem] md:rounded-[2.1rem] border border-white/40 z-20" />

          {/* TOP BAR INSIDE THE FRAME */}
          <div className="relative z-30 flex items-center justify-between px-6 pt-6 sm:px-10 sm:pt-9 md:px-14 md:pt-11">
            {/* Left Group: Logo & Nav Links (Home, Profiles, Heroes, About) */}
            <div className="flex items-center gap-6 sm:gap-10 md:gap-12">
              {/* Minimalist Geometric White Glyph (matching top-left logo in Landing Page.jpg) */}
              <a href="#hero" className="group flex items-center" aria-label="Home">
                <svg
                  className="h-7 w-7 sm:h-8 sm:w-8 text-white transition-transform group-hover:scale-105 drop-shadow"
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
                    className="relative group py-1 text-sm md:text-base font-semibold tracking-wide text-white/90 hover:text-white transition-colors drop-shadow"
                  >
                    <span>{item.label}</span>
                    {item.active ? (
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    ) : (
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-400 rounded-full transition-all group-hover:w-full" />
                    )}
                  </a>
                ))}
              </nav>
            </div>

            {/* Top Right Badge (matching Mobile Legends placement in Landing Page.jpg) */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden xs:block sm:block">
                <p className="font-display text-[10px] sm:text-xs font-black tracking-[0.22em] text-white uppercase drop-shadow-md">
                  IPB UNIVERSITY
                </p>
                <p className="font-mono text-[8px] sm:text-[9px] tracking-widest text-emerald-400 uppercase font-bold drop-shadow">
                  SOFTWARE ENGINEERING
                </p>
              </div>

              {/* Metallic Shield Emblem */}
              <div className="flex items-center gap-1.5 rounded-lg border border-white/35 bg-black/55 backdrop-blur-md px-2.5 py-1.5 shadow-lg">
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
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-white/30 bg-black/50 backdrop-blur-md text-emerald-300 hover:text-white hover:border-white/60 transition-all shadow-lg"
              >
                <Sun className="hidden h-4 w-4 dark:block" />
                <Moon className="block h-4 w-4 text-emerald-300 dark:hidden" />
              </button>
            </div>
          </div>

          {/* MAIN HERO CONTENT (EXACT TYPOGRAPHY & LORE BIO FROM LANDING PAGE) */}
          <div className="relative z-30 my-auto px-6 py-6 sm:px-10 sm:py-8 md:px-14 max-w-2xl lg:max-w-xl xl:max-w-2xl">
            {/* Giant Title: JULIAN -> GALIH (in classic high-contrast Serif font) */}
            <motion.h1
              initial={false}
              className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-normal tracking-tight text-white uppercase leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            >
              GALIH
            </motion.h1>

            {/* Subtitle: MEGUMI FUSHIGURO -> RADEN MAS GALIH PRADITYO */}
            <motion.p
              initial={false}
              className="mt-2.5 sm:mt-3 font-display text-lg sm:text-2xl md:text-3xl font-extrabold uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Raden Mas Galih Pradityo
            </motion.p>

            {/* Specialist Tag */}
            <p className="mt-1 font-mono text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              // Backend &amp; API Architecture Specialist
            </p>

            {/* Narrative Bio Paragraph (styled exactly like the lore in Landing Page.jpg) */}
            <motion.p
              initial={false}
              className="mt-4 sm:mt-5 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-100 font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Raden Mas Galih Pradityo is a 5th-semester Software Engineering student at
              IPB University (GPA 3.80/4.00) specializing in backend software development,
              API architecture, and database modeling. Proficient in engineering scalable
              RESTful APIs and microservices with Laravel 12 and FastAPI, designing resilient
              SQL/NoSQL databases with PostgreSQL RLS and MongoDB, and deploying intelligent
              Computer Vision pipelines and Google Gemini AI integrations.
            </motion.p>
          </div>

          {/* BOTTOM BAR INSIDE THE FRAME */}
          <div className="relative z-30 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-5 px-6 pb-6 sm:px-10 sm:pb-9 md:px-14 md:pb-11">
            {/* Left Watermark / Handle (matching instagram.com/aldidwimustofa) */}
            <div className="flex items-center gap-3">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] sm:text-xs text-white/80 hover:text-emerald-300 transition-colors tracking-wide drop-shadow"
              >
                linkedin.com/in/galihpradityo
              </a>
              <span className="text-white/40">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] sm:text-xs text-white/80 hover:text-emerald-300 transition-colors tracking-wide drop-shadow"
              >
                github.com/galihpradityo
              </a>
            </div>

            {/* Right Action Buttons: Download & Play Now (Exact match to Landing Page.jpg) */}
            <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
              {/* Button 1: Download -> Downloads CV_Raden Mas Galih Pradityo.pdf */}
              <a
                href="/CV_Raden Mas Galih Pradityo.pdf"
                download="CV_Raden Mas Galih Pradityo.pdf"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/40"
              >
                Download
              </a>

              {/* Button 2: Play Now -> Scrolls to Featured Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-emerald-300 hover:scale-105 active:scale-95 shadow-xl shadow-black/40"
              >
                Play Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
