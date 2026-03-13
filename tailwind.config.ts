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
        brand: {
          black: "#000000",
          white: "#FFFFFF",
          yellow: "#FFFF6D",
          grey: "#CDCFCE",
          magenta: "#FF79FF",
          red: "#FF572F",
          blue: "#3461EA",
          aqua: "#38E2DD",
          green: "#3BE56F",
          offwhite: "#F9F7ED",
        },
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};
export default config;
