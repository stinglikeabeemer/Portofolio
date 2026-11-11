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
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "translate-y-0 opacity-100 bg-white/90 dark:bg-[#05110d]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-emerald-500/20 shadow-md shadow-black/5 dark:shadow-[0_4px_30px_rgba(5,26,19,0.3)]"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-500 text-white shadow-md shadow-emerald-500/25 transition-transform duration-300 group-hover:scale-105">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 17L10 11L4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-wider text-slate-900 dark:text-white">
              GALIH<span className="text-emerald-500">.DEV</span>
            </span>
            <span className="font-mono text-[9px] tracking-widest text-slate-500 dark:text-slate-400">
              BACKEND ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Sticky Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle + CV Download */}
        <div className="flex items-center gap-2.5">
          <a
            href={portfolioData.personal.resumeUrl}
            download="CV_Raden Mas Galih Pradityo.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-700 transition-all hover:bg-emerald-600 hover:text-white dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-200 dark:hover:bg-emerald-600 dark:hover:text-white"
          >
            <FileDown className="h-3.5 w-3.5" />
            <span>CV.pdf</span>
          </a>

          {/* Dark / Light Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark or Light Mode"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-700 transition-all hover:border-emerald-500/50 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-emerald-300 dark:hover:border-emerald-400/50 dark:hover:bg-white/10"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="block h-4 w-4 text-slate-700 dark:hidden" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="flex md:hidden h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-100/80 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
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
            className="overflow-hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-xl dark:border-emerald-500/20 dark:bg-[#05110d]/95 md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
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
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/25"
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
