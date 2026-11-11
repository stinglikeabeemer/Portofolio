"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { BackToTop } from "@/components/BackToTop";

export default function HomePage() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <>
      {/* Splash Screen with Jump-in "Hallo!" and Curtain Exit Animation */}
      <SplashScreen onFinish={() => setSplashFinished(true)} />

      {/* Main Content with Entrance Transition */}
      <motion.main
        initial={false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden"
      >
        {/* Full-bleed Hero Section with Julian Artwork */}
        <HeroSection />

        {/* About Section (py-20) */}
        <AboutSection />

        {/* Skills Bento Grid Section (py-20) */}
        <SkillsSection />

        {/* Featured Projects Section (py-20) */}
        <ProjectsSection />

        {/* Organizational Experience & Achievements Timeline Section (py-20) */}
        <ExperienceSection />

        {/* Contact Section (py-20) */}
        <ContactSection />

        {/* Floating Back to Top Button */}
        <BackToTop />
      </motion.main>
    </>
  );
}
