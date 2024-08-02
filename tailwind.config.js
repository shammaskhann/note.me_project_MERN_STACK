/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sidebar-clr': "#4D4D4D",
        'custom-cream-white': "#FFFDFA",
        "custom-white": "#FFFFFF",
        "custom-rose":"#FDBAA3",
        "custom-gray-800":"#343539",
        "custom-gray-900":"#000000",
        "custom-gray-300":"#8C8A97",
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}