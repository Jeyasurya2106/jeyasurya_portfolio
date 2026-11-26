import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // tall desktop viewports only: enables the stacking project cards
        stack: { raw: "(min-width: 1024px) and (min-height: 800px)" },
      },
      colors: {
        bg: token("bg"),
        panel: token("panel"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        volt: token("volt"),
        glow: token("glow"),
        ember: token("ember"),
        onvolt: "#0a0c09",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "spin-slow": "spin 18s linear infinite",
        drift: "drift 22s ease-in-out infinite",
        blink: "blink 1.1s steps(1) infinite",
        dash: "dash 6s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(6%, -8%, 0) scale(1.1)" },
          "66%": { transform: "translate3d(-5%, 6%, 0) scale(0.95)" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        dash: {
          to: { strokeDashoffset: "-200" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
