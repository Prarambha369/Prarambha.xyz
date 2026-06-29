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
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Prompt Studio inspired scale
        'display': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '700' }],
        'h1': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h3': ['clamp(1.5rem, 4vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-l': ['1.25rem', { lineHeight: '1.6' }],
        'body-m': ['1rem', { lineHeight: '1.6' }],
        'body-s': ['0.875rem', { lineHeight: '1.6' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
        'label': ['0.625rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '500' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'container': 'max(2rem, 5vw)',
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
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
