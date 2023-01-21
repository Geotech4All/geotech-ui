/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ui-red-100": "#FF3A1B",
        "ui-red-200": "#EC1F00"
      },
      fontFamily: {
        "montserrat": ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
