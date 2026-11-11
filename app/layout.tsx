import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Backend & API Architecture Specialist`,
  description: portfolioData.personal.role,
  keywords: [
    "Raden Mas Galih Pradityo",
    "Galih Pradityo",
    "Backend Developer",
    "API Architecture",
    "Database Modeling",
    "Software Engineering IPB University",
    "Laravel",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
  ],
  authors: [{ name: portfolioData.personal.name }],
  openGraph: {
    title: `${portfolioData.personal.name} — Personal Portfolio`,
    description: portfolioData.personal.role,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-[#061410] dark:text-slate-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative flex min-h-screen flex-col bg-grid-pattern bg-[size:36px_36px]">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
