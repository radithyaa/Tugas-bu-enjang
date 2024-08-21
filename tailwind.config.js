/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "smoke-white": "#f5f5f5",
        purple2: "#695CFE",
        blue2: "#4285f433",
      },
      boxShadow: {
        "sd-md": "0 2px 10px rgba(0, 0, 0, 0.1)",
        "sd-blue": "0 0 0 2px #4285f433",
      },
      width: {
        "w-85": "350px",
      },
    },
  },
  plugins: [],
};
