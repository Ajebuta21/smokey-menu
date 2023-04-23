/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        food: "url('/src/food.PNG')",
      },
      fontFamily: {
        dance: ["Dancing Script", "cursive"],
        abel: ["Abel", "sans-serif"],
      },
    },
  },
  plugins: [],
};
