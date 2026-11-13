"use client";

import React from "react";

export function RunningTicker() {
  const tickerItems = [
    "RADEN MAS GALIH PRADITYO — BACKEND & API ARCHITECTURE SPECIALIST",
    "IPB UNIVERSITY SOFTWARE ENGINEERING (GPA: 3.80 / 4.00)",
    "CORE STACK: PHP LARAVEL 12 • PYTHON FASTAPI • POSTGRESQL (RLS) • MYSQL • MONGODB • GEMINI API • OPENCV",
    "FEATURED ARCHITECTURES: MEDIGO (FULLSTACK HEALTHCARE) • AGRIVISION (AI PLANT PATHOLOGY) • BA-YU SPA • QLC",
    "SECURITY & ARCHITECTURE: MULTI-ROLE RBAC • LARAVEL SANCTUM • PL/PGSQL TRIGGERS • RESTFUL CONTRACT TESTING",
    "STATUS: OPEN FOR BACKEND & SOFTWARE ENGINEERING INTERNSHIPS (2026/2027)",
    "LOCATION: SOUTH JAKARTA & BOGOR, INDONESIA",
    "CONTACT: GALIHPRADITYO19@GMAIL.COM • +62 895-0514-2755 • LINKEDIN.COM/IN/GALIHPRADITYO",
  ];

  return (
    <div className="sticky top-0 z-[60] w-full border-b border-emerald-500/25 bg-[#030b08]/95 backdrop-blur-xl py-1 px-2 select-none overflow-hidden group">
      <div className="mx-auto flex max-w-full items-center">
        {/* Left Fixed Badge: SYSTEM STATUS */}
        <div className="z-10 flex shrink-0 items-center gap-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] font-bold text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)] mr-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-widest uppercase">SYSTEM::ONLINE</span>
        </div>

        {/* Running Marquee Text Track */}
        <div className="relative flex overflow-hidden w-full items-center">
          <div className="animate-marquee whitespace-nowrap flex items-center font-mono text-[11px] sm:text-xs font-medium text-emerald-300/90 tracking-wider">
            {/* Repeated twice for seamless infinite loop */}
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="inline-flex items-center mx-3 sm:mx-4">
                <span>{item}</span>
                <span className="mx-3 sm:mx-4 text-emerald-500/40">✦</span>
              </span>
            ))}
          </div>

          {/* Left & Right Edge Gradient Fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#030b08] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#030b08] to-transparent" />
        </div>
      </div>
    </div>
  );
}
