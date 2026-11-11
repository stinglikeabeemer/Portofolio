import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero Section with Fade-in Animation & Framed HUD */}
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
    </main>
  );
}

