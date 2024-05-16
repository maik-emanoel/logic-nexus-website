import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-brand": "#2e44e9",
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)", // blue-brand
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        sm: { max: "475px" },
        // => @media (max-width: 475px) { ... }

        xs: { max: "375px" },
        // => @media (max-width: 375px) { ... }
      },
      animation: {
        "slide-out": "slide-out .3s forwards",
        "slide-in": "slide-in .3s forwards",
        "scale-out": "scale-out .3s forwards",
        "scale-in": "scale-in .3s forwards",
      },
      keyframes: {
        "slide-out": {
          "100%": { transform: "translateX(100%)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
        },
        "scale-out": {
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        "scale-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
