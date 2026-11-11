"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  Terminal,
  FileDown,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-[#070814]/85 backdrop-blur-xl border-b border-slate-200/80 dark:border-violet-500/20 shadow-sm dark:shadow-[0_4px_30px_rgba(124,58,237,0.1)]"
          : "bg-white/70 dark:bg-[#070814]/70 backdrop-blur-md border-b border-slate-200/40 dark:border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-md shadow-violet-500/25 transition-transform duration-300 group-hover:scale-105">
            <Terminal className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-[#070814] bg-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-wider text-slate-900 dark:text-white sm:text-base">
              GALIH<span className="text-violet-600 dark:text-violet-400">.DEV</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-slate-500 dark:text-slate-400">
              BACKEND ARCHITECT
            </span>
          </div>
        </a>

        {/* Decorative HUD Line + Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          <div className="mr-3 hidden lg:block h-[1px] w-12 bg-gradient-to-r from-transparent via-violet-500/50 to-violet-500/80" />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-violet-400"
            >
              {item.label}
            </a>
          ))}
          <div className="ml-3 hidden lg:block h-[1px] w-12 bg-gradient-to-l from-transparent via-cyan-500/50 to-violet-500/80" />
        </nav>

        {/* Right Controls: Theme Toggle + Quick Resume CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2.5">
          <a
            href={portfolioData.personal.resumeUrl}
            download="CV_Raden Mas Galih Pradityo.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-violet-700 transition-all hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-violet-400/30 dark:bg-violet-500/15 dark:text-violet-200 dark:hover:bg-violet-600 dark:hover:text-white"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>CV.pdf</span>
          </a>

          {/* Dark / Light Mode Toggle (Always visible on SSR via dark: classes) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-700 transition-all hover:border-violet-500/50 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-amber-300 dark:hover:border-violet-400/50 dark:hover:bg-white/10"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 text-slate-700 dark:hidden" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-violet-500/20 dark:bg-[#070814]/95 md:hidden"
          >
            <div className="space-y-1.5 px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-500/10 hover:text-violet-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-violet-400"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-slate-400">
                    0{navItems.indexOf(item) + 1}
                  </span>
                </a>
              ))}

              <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-white/10">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="CV_Raden Mas Galih Pradityo.pdf"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-violet-600/25"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-white/10 dark:text-slate-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-white/10 dark:text-slate-300"
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
