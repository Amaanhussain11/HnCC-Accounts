/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "hero-btn-shadow": "5px 5px 5px rgba(0, 0, 0, 0.3)",
        "img-shadow": "-10px -10px 0px rgba(255, 255, 255, 1)",
      },
      backgroundImage: {
        "footer-hero-grad":
          "linear-gradient(91deg, #000F21 18.18%, rgba(9, 18, 66, 0.20) 64.92%)",
        xyz: "yellow",
      },
    },
  },
  plugins: [],
};
