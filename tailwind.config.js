/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        lightning: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-100vw)',
          },
          '1%': {
            opacity: 1,
          },
          ' 30%': {
            transform: 'translateX(100vw)',
          },
          ' 31%': {
            opacity: 0,
            transform: 'translateX(-100vw)',
          },
        },
      },
      animation: {
        lightning: 'lightning 1200ms cubic-bezier(0.45,-0.45,0.25,1.75)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
