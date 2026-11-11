"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  Linkedin,
  Github,
  Phone,
  MapPin,
  FileDown,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { personal } = portfolioData;
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${name || "Recruiter / Engineering Lead"}`
    );
    const body = encodeURIComponent(
      `Hi Galih,\n\nName: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 scroll-mt-24">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white/95 via-slate-50/90 to-emerald-50/40 p-6 shadow-xl dark:border-emerald-500/20 dark:from-[#09221a]/95 dark:via-[#081a14]/95 dark:to-[#05130e]/95 dark:shadow-[0_10px_35px_rgba(4,13,10,0.5)] sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left Info Column with Left Slide-in */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex flex-col justify-between space-y-6"
            >
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                  05 // INITIATE CONNECTION
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Let&apos;s Build Scalable{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                    Backend Systems
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                  Open for <strong>Backend Developer Internship</strong> opportunities, software engineering collaborations, and technical discussions on API and database architectures.
                </p>
              </div>

              <div className="space-y-3.5">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white/80 p-4 transition-all hover:border-emerald-500/50 dark:border-emerald-500/15 dark:bg-[#05130e]/80 dark:hover:border-emerald-400/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                      Direct Email
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {personal.email}
                    </p>
                  </div>
                </a>

                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-emerald-500/15 dark:bg-[#05130e]/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        Phone / WhatsApp
                      </p>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {personal.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4 dark:border-emerald-500/15 dark:bg-[#05130e]/80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        Base Location
                      </p>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {personal.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-500 active:scale-95"
                >
                  <Mail className="h-4 w-4" />
                  <span>Say Hello Directly</span>
                </a>
                <a
                  href={personal.resumeUrl}
                  download="CV_Raden Mas Galih Pradityo.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-xs font-bold text-slate-800 transition-all hover:border-emerald-500 hover:text-emerald-600 dark:border-emerald-500/20 dark:bg-[#05130e]/80 dark:text-white dark:hover:border-emerald-400"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-3 text-xs font-semibold text-slate-700 hover:border-emerald-500 dark:border-emerald-500/20 dark:bg-[#05130e]/80 dark:text-slate-200"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-3 text-xs font-semibold text-slate-700 hover:border-emerald-500 dark:border-emerald-500/20 dark:bg-[#05130e]/80 dark:text-slate-200"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>

            {/* Right Quick Message Form with Right Slide-in */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-emerald-500/20 dark:bg-[#05130e]/80 sm:p-7"
              >
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name or company..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 dark:border-emerald-500/20 dark:bg-[#081a14] dark:text-white dark:focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 dark:border-emerald-500/20 dark:bg-[#081a14] dark:text-white dark:focus:border-emerald-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs font-semibold text-slate-600 dark:text-slate-300"
                  >
                    Message / Project Inquiry
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Galih, we'd like to discuss a Backend Internship / software engineering opportunity..."
                    className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-emerald-500 dark:border-emerald-500/20 dark:bg-[#081a14] dark:text-white dark:focus:border-emerald-400"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
