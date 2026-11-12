import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { ProjectDetailView } from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Raden Mas Galih Pradityo",
    };
  }

  return {
    title: `${project.title} — System Architecture & Details | Raden Mas Galih Pradityo`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}

