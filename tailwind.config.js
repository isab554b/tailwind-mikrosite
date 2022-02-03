const { orange } = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blaa: "#003060",
      orange: "#E55B13",
      beige: "#F5EDE0",
      graa: "#CCCCCC",
      hvid: "#FFF",
    },

    fontFamily: {
      roboto: "'Roboto Condensed', sans-serif",
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
