/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "sp-color": "#F00",
        "iconic": {
          100: "#EEE",
          200: "#BBB",
        }
      },
      fontFamily: {
        monts: ["Montserrat"],
        popps: ["Poppins"],
      },
    },
  },
  plugins: [],
}