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
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          emerald: "#10B981",
          teal: "#14B8A6",
          cyan: "#06B6D4",
          violet: "#7C3AED",
          gold: "#F59E0B",
        },
        forest: {
          950: "#040d0a",
          900: "#061410",
          850: "#081b15",
          800: "#0b241c",
          700: "#103328",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(16, 185, 129, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 35px -5px rgba(16, 185, 129, 0.3)",
        "glow-emerald": "0 0 35px -5px rgba(16, 185, 129, 0.35)",
        "glow-cyan": "0 0 35px -5px rgba(6, 182, 212, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
