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
          50: "#EEEEFF",
          100: "#E0DFFF",
          200: "#C3C1FF",
          300: "#A6A3FF",
          400: "#8985FF",
          500: "#5B5BD6",
          600: "#4848B8",
          700: "#36369A",
          800: "#24247C",
          900: "#12125E",
        },
        accent: "#F97316",
        "accent-light": "#FEF0E7",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "count-up": "countUp 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
      boxShadow: {
        phone: "0 32px 64px -12px rgba(91,91,214,0.35), 0 0 0 1px rgba(91,91,214,0.08)",
        card: "0 4px 24px -4px rgba(17,17,40,0.08), 0 1px 4px rgba(17,17,40,0.04)",
        "card-hover": "0 12px 40px -8px rgba(17,17,40,0.14), 0 2px 8px rgba(17,17,40,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
