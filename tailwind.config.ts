import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          violet: "#7C3AED",
          indigo: "#4F46E5",
          cyan: "#06B6D4",
          gold: "#F59E0B",
          emerald: "#10B981",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(124, 58, 237, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.07) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(124, 58, 237, 0.35)",
        "glow-gold": "0 0 35px -5px rgba(245, 158, 11, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;

