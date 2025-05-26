/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../shared/src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        demo: {
          50: '#fff7ed',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        }
      }
    },
  },
  plugins: [],
}