/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "RedHatDisplay": ["Red Hat Display", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0E8BFF",
          100: "#F5FAFF",
        },
        blueGray: "#26395C",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}