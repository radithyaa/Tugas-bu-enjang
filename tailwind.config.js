/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["poppins", "arial", "sans-serif"],
    },
    extend: {
      colors: {
        "bookmark-black": "#1A1A1A",
        "bookmark-blue": "#D8E9F8",
        "bookmark-white": "#FCFEFF",
        "bookmark-grey": "#B0BAC3",
      },
    },
  },
  plugins: [],
};
