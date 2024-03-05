// /** @type {import('tailwindcss').Config} */

// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      primary: "000",
      secondary: "rgb(98, 203, 218)",
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Jost", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
