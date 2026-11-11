"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Back to top"
          className="group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/40 bg-[#061410]/85 text-emerald-400 backdrop-blur-xl shadow-lg shadow-black/40 hover:border-emerald-400 hover:bg-[#081a14] hover:text-white hover:shadow-emerald-500/25 transition-all"
        >
          <ChevronUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

