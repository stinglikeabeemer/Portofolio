"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen({ onFinish }: { onFinish?: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Lock scrolling while splash screen is displaying
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = originalOverflow || "auto";
      if (onFinish) onFinish();
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040d0a] overflow-hidden"
        >
          {/* Ambient Ethereal Glow */}
          <div className="absolute h-96 w-96 rounded-full bg-emerald-500/20 blur-[130px] pointer-events-none" />

          {/* Center Jump-in Card & Animation */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Minimalist Glowing Logo Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xl shadow-emerald-500/30 border border-emerald-400/40"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 4L28 26H22L16 14.5L10 26H4L16 4Z" fill="white" />
                <polygon points="16,19 13,25 19,25" fill="#34D399" />
              </svg>
            </motion.div>

            {/* Jump-in Text "Hallo!" with spring bounce */}
            <motion.h1
              initial={{ scale: 0.2, opacity: 0, y: 35 }}
              animate={{
                scale: [0.2, 1.18, 1],
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                ease: [0.34, 1.56, 0.64, 1],
                times: [0, 0.7, 1],
              }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal tracking-tight text-white drop-shadow-[0_4px_24px_rgba(16,185,129,0.6)]"
            >
              Hallo!
            </motion.h1>

            {/* Subtitle / System Welcome */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mt-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-emerald-400 uppercase drop-shadow"
            >
              // WELCOME TO GALIH&apos;S PORTFOLIO
            </motion.p>

            {/* Sleek Progress Bar */}
            <div className="mt-8 h-1 w-48 sm:w-64 rounded-full bg-emerald-950/80 overflow-hidden border border-emerald-500/25">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.25 }}
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_12px_#10B981]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

