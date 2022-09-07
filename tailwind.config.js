/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-bg": "url(assets/homebg.jpg)",
      },
      container: {
        "2xl": "1366px",
      },
      maxWidth: {},
    },
  },
  plugins: [],
};
