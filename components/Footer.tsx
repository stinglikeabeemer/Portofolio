import React from "react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#070814]/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
            <Terminal className="h-4 w-4" />
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            © {currentYear}{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {personal.name}
            </span>
            . All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 transition-colors hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

