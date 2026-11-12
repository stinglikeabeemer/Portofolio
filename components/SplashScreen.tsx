"use client";

import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Unmount completely after CSS curtain animation finishes (3.0s + 100ms buffer)
    const timer = setTimeout(() => {
      setMounted(false);
      if (onFinish) onFinish();
    }, 3100);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!mounted) return null;

  return (
    <div
      onClick={() => {
        setMounted(false);
        if (onFinish) onFinish();
      }}
      className="splash-curtain fixed inset-0 z-[100] flex cursor-pointer flex-col items-center justify-center bg-[#040d0a] overflow-hidden select-none"
    >
      {/* Ambient Ethereal Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px] pointer-events-none" />

      {/* Center Card with Jump-in From Top Animation */}
      <div className="splash-drop-top relative z-10 flex flex-col items-center text-center px-4">
        {/* Glowing Geometric Logo */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl shadow-emerald-500/30 border border-emerald-400/40">
          <svg
            className="h-8 w-8"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 4L28 26H22L16 14.5L10 26H4L16 4Z" fill="white" />
            <polygon points="16,19 13,25 19,25" fill="#34D399" />
          </svg>
        </div>

        {/* Generated Scramble Text "Hallo!" */}
        <TextGenerateEffect
          text="Hallo!"
          as="h1"
          delay={0.15}
          scrambleSpeed={30}
          className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white drop-shadow-[0_4px_24px_rgba(16,185,129,0.7)]"
        />

        {/* Generated Scramble Subtitle */}
        <TextGenerateEffect
          text="WELCOME TO GALIH'S PORTFOLIO"
          as="p"
          delay={0.45}
          className="mt-3 font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-emerald-400 uppercase drop-shadow"
        />

        {/* Sleek Progress Bar (2.4s fill for 3.0s splash) */}
        <div className="mt-8 h-1 w-48 sm:w-64 rounded-full bg-emerald-950/80 overflow-hidden border border-emerald-500/25">
          <div className="splash-progress-bar h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_12px_#10B981]" />
        </div>

        <p className="mt-4 font-mono text-[10px] text-white/40 tracking-wider">
          Click anywhere to skip
        </p>
      </div>
    </div>
  );
}
