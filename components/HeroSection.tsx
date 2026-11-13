"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

const navItems = [
  { label: "Home", href: "#hero", active: true },
  { label: "About & Skills", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  const { personal } = portfolioData;
  const { resolvedTheme, setTheme } = useTheme();
  const [hoveredHeroTab, setHoveredHeroTab] = useState<string | null>(null);

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
        {/* Gentle bottom fade to transition into the next section without obscuring the artwork */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-48 bg-gradient-to-t from-[#061410] via-[#061410]/75 to-transparent pointer-events-none" />
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

          {/* Navigation Links with Active Underline & Hover Glow Animation */}
          <nav
            className="hidden sm:flex items-center gap-7 md:gap-9 relative"
            onMouseLeave={() => setHoveredHeroTab(null)}
          >
            {navItems.map((item) => {
              const isHovered = hoveredHeroTab === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredHeroTab(item.label)}
                  className="relative group py-1.5 text-sm md:text-base font-semibold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] hover:text-emerald-300 transition-colors flex items-center justify-center"
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active Indicator Underline for Home */}
                  {item.active && (
                    <motion.span
                      layoutId="heroActiveUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[3px] bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    />
                  )}

                  {/* Animated Hover Gliding Glow */}
                  {isHovered && !item.active && (
                    <motion.span
                      layoutId="heroHoverUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-emerald-400 rounded-full shadow-[0_0_10px_#34D399]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
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
        <TextGenerateEffect
          text="GALIH"
          as="h1"
          delay={0.1}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-normal tracking-tight text-white uppercase leading-[0.9] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
        />

        {/* Subtitle: RADEN MAS GALIH PRADITYO */}
        <TextGenerateEffect
          text="Raden Mas Galih Pradityo"
          as="p"
          delay={0.25}
          className="mt-3 font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
        />

        {/* Specialist Tag */}
        <TextGenerateEffect
          text="Backend & API Architecture Specialist"
          as="p"
          delay={0.4}
          className="mt-1 font-mono text-xs sm:text-sm md:text-base font-bold tracking-widest text-emerald-300 uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        />

        {/* Narrative Bio Paragraph */}
        <TextGenerateEffect
          text="5th-semester Software Engineering student at IPB University (GPA 3.80/4.00) specializing in scalable RESTful APIs, database modeling, and AI/CV backend pipelines."
          as="p"
          delay={0.55}
          className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]"
        />
      </div>

      {/* BOTTOM BAR (Watermarks on Left) */}
      <div className="relative z-30 flex items-center justify-between px-6 sm:px-12 lg:px-16 pb-8 sm:pb-12">
        {/* Left Watermark / Handle */}
        <div className="flex items-center gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm text-white/90 hover:text-emerald-300 transition-colors tracking-wide"
          >
            linkedin.com/in/galihpradityo
          </a>
        </div>
      </div>
    </section>
  );
}
