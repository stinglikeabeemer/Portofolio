"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  scrambleClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number; // Delay in seconds before scramble begins
  scrambleSpeed?: number; // ms per tick
  once?: boolean;
}

const SCRAMBLE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#$%^&*<>[]{}";

export function TextGenerateEffect({
  text,
  className = "",
  scrambleClassName = "text-emerald-500 dark:text-emerald-400 font-mono opacity-90",
  as: Tag = "p",
  delay = 0,
  scrambleSpeed = 24,
  once = true,
}: TextGenerateEffectProps) {
  // Store the progress of resolved characters (0 to text.length)
  const [resolvedIndex, setResolvedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [randomChars, setRandomChars] = useState<string[]>([]);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once, amount: 0.15 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    if (prefersReducedMotion) {
      setResolvedIndex(text.length);
      setIsAnimating(false);
    } else if (isInView) {
      timeoutId = setTimeout(() => {
        setIsAnimating(true);
        setResolvedIndex(0);

        const totalLength = text.length;
        // Step dynamically scales with text length so animation feels snappy (approx 0.5s - 1.0s)
        const step = Math.max(0.45, totalLength / 28);
        let currentProgress = 0;

        intervalId = setInterval(() => {
          currentProgress += step;

          if (currentProgress >= totalLength) {
            setResolvedIndex(totalLength);
            setIsAnimating(false);
            clearInterval(intervalId);
          } else {
            setResolvedIndex(Math.floor(currentProgress));
            // Generate random letters for the unresolved portion
            const count = totalLength - Math.floor(currentProgress);
            const chars = Array.from({ length: count }, () =>
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
            );
            setRandomChars(chars);
          }
        }, scrambleSpeed);
      }, delay * 1000);
    } else if (!once) {
      // Reset when scrolling out of view so it regenerates on re-entry
      setResolvedIndex(0);
      setIsAnimating(false);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isInView, text, delay, scrambleSpeed, once, prefersReducedMotion]);

  // If not in view or before starting, render either static text or initial random letters
  // For safety and SSR consistency, we render characters correctly
  const characters = Array.from(text);

  return (
    // @ts-expect-error dynamic HTML tag
    <Tag ref={containerRef} className={className}>
      {/* Screen readers get the real text once; the scrambling glyphs are decorative */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
      {characters.map((char, index) => {
        if (char === " ") {
          return " ";
        }
        if (char === "\n") {
          return <br key={index} />;
        }

        // If this character is already resolved, render it normally
        if (prefersReducedMotion || !isInView || resolvedIndex >= totalLengthOrChar(index)) {
          return (
            <span key={index} className="transition-opacity duration-150">
              {char}
            </span>
          );
        }

        // While actively animating and unresolved, render random scramble letter
        if (isAnimating) {
          const scrambleChar =
            randomChars[index - resolvedIndex] ||
            SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];

          return (
            <span key={index} className={`inline-block ${scrambleClassName}`}>
              {scrambleChar}
            </span>
          );
        }

        // Before animation starts (initial state when in view waiting for delay)
        return (
          <span key={index} className={`inline-block ${scrambleClassName}`}>
            {SCRAMBLE_CHARS[(index * 7) % SCRAMBLE_CHARS.length]}
          </span>
        );
      })}
      </span>
    </Tag>
  );

  function totalLengthOrChar(index: number) {
    return index + 1;
  }
}
