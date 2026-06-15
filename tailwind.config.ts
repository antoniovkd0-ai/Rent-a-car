import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050509",
        surface: "#0A0A0F",
        surfaceLight: "rgba(255,255,255,0.03)",
        border: "rgba(255,255,255,0.06)",
        primary: "#FFFFFF",
        secondary: "#B5B5C0",
        accent: "#32E875",
        alert: "#FF3B4E",
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "Plus Jakarta Sans", "Poppins", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
};
export default config;
