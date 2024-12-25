const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nosifer: ['Nosifer', 'cursive'],
        crimson: ['Crimson Text', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'gradient-shift': 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [animate],
};