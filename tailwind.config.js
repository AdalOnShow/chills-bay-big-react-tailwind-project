/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        iceBlue: "#E4E7EC",
        blueGray: "#26395C",
      },
      darkMode: "class"
    },
  },
  darkMode: "class",
}