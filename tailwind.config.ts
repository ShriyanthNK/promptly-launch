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
          50:  "#f5ece8",
          100: "#eacdc2", // brandWarm – Almond Silk
          200: "#d4bab2",
          300: "#c09085",
          400: "#a87070",
          500: "#b75d69", // brand – Dusty Mauve (primary accent)
          600: "#774c60", // brandMid – Mauve Shadow
          700: "#372549", // brandDark – Dark Violet
          800: "#2a1c3a",
          900: "#1a1423", // brandDeep – Midnight Violet
        },
        accent: "#eacdc2",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
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
        phone: "0 32px 64px -12px rgba(183,93,105,0.35), 0 0 0 1px rgba(183,93,105,0.08)",
        card: "0 4px 24px -4px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2)",
        "card-hover": "0 12px 40px -8px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
