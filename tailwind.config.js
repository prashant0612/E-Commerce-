/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        '3xl': '#222426 -5px 5px 15px 5px',
      }

    },
  },
  plugins: [],
}

