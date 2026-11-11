"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  FileDown,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "-translate-y-24 opacity-0 scale-95 pointer-events-none"
      } w-[92%] sm:w-auto max-w-fit`}
    >
      {/* Floating Glassmorphic Pill Capsule in Center */}
      <div className="flex items-center justify-between gap-3 sm:gap-6 rounded-full border border-slate-200/80 bg-white/85 px-4 sm:px-6 py-2 shadow-2xl shadow-black/15 backdrop-blur-2xl dark:border-emerald-500/30 dark:bg-[#061410]/85 dark:shadow-[0_12px_45px_rgba(0,0,0,0.6)]">
        {/* Brand Glyph Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Back to top"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-emerald-500/30 transition-transform group-hover:scale-105">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M4 17L10 11L4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </div>
          <span className="hidden xs:inline-block font-display text-sm font-bold tracking-wider text-slate-900 dark:text-white">
            GALIH<span className="text-emerald-400">.DEV</span>
          </span>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav
          aria-label="Floating Navigation"
          className="hidden md:flex items-center gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-600 transition-all hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-500/15 dark:hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: CV.pdf + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-2">
          <a
            href={portfolioData.personal.resumeUrl}
            download="CV_Raden Mas Galih Pradityo.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300 dark:hover:bg-emerald-500 dark:hover:text-white transition-all shadow-sm"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>CV.pdf</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 hover:border-emerald-500/50 hover:text-emerald-600 dark:border-white/15 dark:bg-white/5 dark:text-emerald-300 dark:hover:border-emerald-400/50 transition-all"
          >
            <Sun className="hidden h-3.5 w-3.5 dark:block" />
            <Moon className="block h-3.5 w-3.5 text-slate-700 dark:hidden" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Dropdown Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mt-2 w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl dark:border-emerald-500/25 dark:bg-[#061410]/95 md:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-emerald-400"
                >
                  <span>{item.label}</span>
                </a>
              ))}

              <div className="mt-3 flex items-center justify-between border-t border-slate-200/70 pt-3 dark:border-white/10">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="CV_Raden Mas Galih Pradityo.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/25"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-slate-200 p-2 text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
