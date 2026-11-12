"use client";

import React from "react";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  mode?: "words" | "chars";
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function TextGenerateEffect({
  text,
  className = "",
  wordClassName = "",
  as = "p",
  mode = "words",
  delay = 0,
  staggerDelay = 0.03,
  once = false,
}: TextGenerateEffectProps) {
  const Component = motion[as] || motion.div;

  // Split either into characters or into words
  const items = mode === "chars" ? Array.from(text) : text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8,
      filter: "blur(6px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Component
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {items.map((item, index) => {
        if (mode === "chars") {
          return (
            <motion.span
              key={`${item}-${index}`}
              variants={itemVariants}
              className={`inline-block ${item === " " ? "w-[0.25em]" : ""} ${wordClassName}`}
            >
              {item === " " ? "\u00A0" : item}
            </motion.span>
          );
        }

        return (
          <motion.span
            key={`${item}-${index}`}
            variants={itemVariants}
            className={`inline-block mr-[0.28em] ${wordClassName}`}
          >
            {item}
          </motion.span>
        );
      })}
    </Component>
  );
}

