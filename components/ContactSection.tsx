"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  FileDown,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white/95 via-slate-50/90 to-emerald-50/30 p-5 sm:p-10 md:p-12 shadow-xl dark:border-emerald-500/20 dark:from-[#09221a]/95 dark:via-[#081a14]/95 dark:to-[#05130e]/95 dark:shadow-[0_12px_45px_rgba(4,13,10,0.5)] text-center"
        >
          {/* HUD Cyber Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400/50 rounded-bl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400/50 rounded-br-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-2xl mx-auto">
            <TextGenerateEffect
              text="INITIATE CONNECTION"
              as="span"
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-emerald-400 block"
            />
            <h2 className="mt-2 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <TextGenerateEffect text="Let's Build Scalable Backend Systems" as="span" delay={0.1} />
            </h2>
            <TextGenerateEffect
              text="Available for Backend Engineering Internships, API architecture consultations, and technical collaborations."
              as="p"
              delay={0.15}
              className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-center"
            />
          </div>

          {/* 3 Main Direct Contact Cards */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-3 text-left">
            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md dark:border-emerald-500/15 dark:bg-[#05130e]/80 dark:hover:border-emerald-400"
            >
              <div>
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="mt-3.5 sm:mt-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Direct Email
                </p>
                <p className="mt-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all group-hover:text-emerald-500 transition-colors">
                  {personal.email}
                </p>
              </div>
              <span className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                Send Mail <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* WhatsApp / Phone Card */}
            <a
              href={`https://wa.me/6289505142755`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md dark:border-emerald-500/15 dark:bg-[#05130e]/80 dark:hover:border-emerald-400"
            >
              <div>
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="mt-3.5 sm:mt-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  WhatsApp / Phone
                </p>
                <p className="mt-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  {personal.phone}
                </p>
              </div>
              <span className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                Chat via WhatsApp <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 sm:p-6 shadow-sm transition-all hover:border-emerald-500 hover:shadow-md dark:border-emerald-500/15 dark:bg-[#05130e]/80 dark:hover:border-emerald-400"
            >
              <div>
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="mt-3.5 sm:mt-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Professional Network
                </p>
                <p className="mt-1 text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                  galihpradityo
                </p>
              </div>
              <span className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                Connect on LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>

          {/* Action Row & Location */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 border-t border-slate-200/80 dark:border-white/10">
            <a
              href={personal.resumeUrl}
              download="CV_Raden Mas Galih Pradityo.pdf"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 sm:px-7 py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
            >
              <FileDown className="h-4.5 w-4.5" />
              <span>Download Official CV (PDF)</span>
            </a>

            <div className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 font-mono text-xs sm:text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span>{personal.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
