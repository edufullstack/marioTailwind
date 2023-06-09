/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'wave-pattern': 'url(./Archivos iniciales/img/wave-white.png)'
      }
    },
  },
  plugins: [],
}

