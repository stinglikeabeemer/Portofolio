"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SplashScreen } from "@/components/SplashScreen";
import { HeroSection } from "@/components/HeroSection";
import { AboutSkillsSection } from "@/components/AboutSkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { BackToTop } from "@/components/BackToTop";
import { CyberBackground } from "@/components/CyberBackground";

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
        {/* Full-bleed Hero Section with Julian Artwork (Completely Untouched) */}
        <HeroSection />

        {/* Post-Hero Container with Living Architecture Graph Background Effect */}
        <div className="relative">
          {/* Cybernetic Node Graph & Technical Matrix Background (Starts AFTER Julian) */}
          <CyberBackground />

          {/* Combined About & Skills Section (py-20) */}
          <AboutSkillsSection />

          {/* Featured Projects Section (py-20) */}
          <ProjectsSection />

          {/* Organizational Experience & Achievements Timeline Section (py-20) */}
          <ExperienceSection />

          {/* Contact Hub Section (py-20) */}
          <ContactSection />
        </div>

        {/* Floating Back to Top Button */}
        <BackToTop />
      </motion.main>
    </>
  );
}
