const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        color: {
          DEFAULT: "hsl(var(--color))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        lightning: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100vw)",
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
