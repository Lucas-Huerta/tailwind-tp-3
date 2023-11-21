/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {
        colors: {
          lightChips: "#FBE7F2", 
          darkChips: "#AA0E52", 
          lightBackground: "#F5F4F4",
          cardBackground: "#F4F4F5",
          darkCardBackground: "#292227",
        }, 
      },
  },
  plugins: [],
  darkMode: "class",
};