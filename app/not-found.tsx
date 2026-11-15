import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80svh] flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <p className="relative font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-600 dark:text-emerald-400">
        Error 404
      </p>
      <h1 className="relative mt-3 font-serif text-6xl text-slate-900 dark:text-white sm:text-7xl">
        Page not found
      </h1>
      <p className="relative mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The route you requested doesn&apos;t exist — maybe the project moved or the link has a typo.
      </p>
      <Link
        href="/"
        className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>
    </main>
  );
}
