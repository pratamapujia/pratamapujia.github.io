/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#d9376e",
        secondary: "#ff8e3c",
        dark: "#0d0d0d",
        stroke: "#2a2a2a",
        bg: "#eff0f3",
      },
    },
  },
  plugins: [],
};
