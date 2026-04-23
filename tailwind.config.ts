import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        "surface-2": "#1A1A1A",
        border: "#222222",
        "border-2": "#2E2E2E",
        primary: "#FF6611",
        secondary: "#7542E5",
        accent: "#DC143C",
        cyan: "#00D4FF",
        amber: "#F59E0B",
        text: "#F5F5F5",
        "text-2": "#A0A0A0",
        "text-muted": "#555555",
      },
      fontFamily: {
        display: ["var(--font-zilla)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        out: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
