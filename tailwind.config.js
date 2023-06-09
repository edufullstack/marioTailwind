/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-pattern": "url(../Archivos_iniciales/img/wave-white.png)",
        "wave-pattern-dots": "url(../Archivos_iniciales/img/pattern-white-dots.png)",
      },
    },
  },
  plugins: [],
};
