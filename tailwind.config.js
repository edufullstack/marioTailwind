/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:(theme)=> ({
        'wave-patter': 'url(./Archivos iniciales/img/wave-white.png)'
      })
    },
  },
  plugins: [],
}

