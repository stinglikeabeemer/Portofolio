"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface InteractivePortraitProps {
  baseImage: string;
  revealImage: string;
  alt: string;
  spotlightRadius?: number;
}

export function InteractivePortrait({
  baseImage,
  revealImage,
  alt,
  spotlightRadius = 55,
}: InteractivePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <div className="my-6 flex justify-center">
      <div className="relative group">
        {/* Subtle Ambient Ethereal Glow */}
        <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-emerald-500/25 to-teal-500/20 blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Outer Minimalist Frame */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-3xl p-1.5 bg-gradient-to-b from-emerald-400/35 via-emerald-500/10 to-teal-500/25 border border-emerald-400/35 shadow-xl shadow-emerald-500/10 dark:shadow-[0_12px_36px_rgba(4,13,10,0.6)]">
          {/* HUD Cyber Corner Accents */}
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400/60 rounded-tl-lg pointer-events-none z-20 transition-colors group-hover:border-emerald-300" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400/60 rounded-br-lg pointer-events-none z-20 transition-colors group-hover:border-emerald-300" />

          {/* Interactive Mask Container */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={(e) => {
              handleMouseMove(e);
              setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={(e) => {
              handleTouchMove(e);
              setIsHovered(true);
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => setIsHovered(false)}
            className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-slate-200/50 dark:border-emerald-500/20 cursor-crosshair select-none"
          >
            {/* Layer 1: Base Mask Photo (Iron Man Armor) */}
            <Image
              src={baseImage}
              alt="Iron Man Helmet Mask"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, 208px"
              priority
              className="object-cover object-center pointer-events-none"
            />

            {/* Layer 2: Revealed Real Face (Galih) with Dynamic Circle ClipPath */}
            <div
              className="absolute inset-0 pointer-events-none transition-[clip-path] duration-75 ease-out"
              style={{
                clipPath: isHovered
                  ? `circle(${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px)`
                  : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
                WebkitClipPath: isHovered
                  ? `circle(${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px)`
                  : `circle(0px at ${mousePos.x}px ${mousePos.y}px)`,
              }}
            >
              <Image
                src={revealImage}
                alt={alt}
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, 208px"
                className="object-cover object-center"
              />
            </div>

            {/* Scanning Ring & Arc Reticle that follows cursor */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute pointer-events-none rounded-full border border-emerald-400/90 shadow-[0_0_16px_rgba(16,185,129,0.8),inset_0_0_12px_rgba(16,185,129,0.3)] z-10"
                  style={{
                    width: spotlightRadius * 2,
                    height: spotlightRadius * 2,
                    left: mousePos.x,
                    top: mousePos.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Subtle Target Dot in Center of Spotlight */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-70">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#10B981]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Vignette Fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />

            {/* Floating Status Tag (switches on hover: MARK::VII_ONLINE -> ARCHITECT) */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-950/85 border border-emerald-400/40 backdrop-blur-md font-mono text-[10px] text-emerald-300 font-semibold shadow-md select-none pointer-events-none z-10">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isHovered
                    ? "bg-emerald-400 shadow-[0_0_8px_#10B981]"
                    : "bg-amber-400 animate-pulse shadow-[0_0_8px_#F59E0B]"
                }`}
              />
              <span>{isHovered ? "ARCHITECT" : "MARK::VII_ONLINE"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

