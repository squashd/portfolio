const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lightning: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
          "1%": {
            opacity: 1,
          },
          " 20%": {
            opacity: 1,
            transform: "translateX(100vw)",
          },
          " 21%": {
            opacity: 0,
            transform: "translateX(-100vw)",
          },
        },
        blink: {
          "0%, 100%": {
            opacity: 0,
          },
          "24%, 76%": {
            opacity: 0,
          },
          "25%, 75%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        flip: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "75%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeaway: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "60%": { opacity: 1 },
          "100%": {
            opacity: 0,
            transform: "translateY(-80px)",
          },
        },
      },
      animation: {
        lightning: "lightning 1900ms cubic-bezier(0.45,-0.45,0.25,1.75)",
        blink: "blink 1300ms infinite",
        flip: "flip 600ms ease-in-out",
        shake: "shake 140ms ease-in-out infinite",
        fadeaway: "fadeaway 1500ms ease-out",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("not-last", "&:not(:last-child)");
    }),
    require("@tailwindcss/typography"),
  ],
};
