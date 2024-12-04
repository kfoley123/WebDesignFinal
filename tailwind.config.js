/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customPink: '#F493C1', 
      customLightPink: '#FFB7D9',
      },
  },
  plugins: [],
}}