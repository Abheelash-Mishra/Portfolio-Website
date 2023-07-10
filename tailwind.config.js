/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberpunkYellow: "#FCEE0A",
      },
      scale: {
        '103': '1.03',
      }
    },
    fontFamily: {}
  },
  plugins: [],
}

