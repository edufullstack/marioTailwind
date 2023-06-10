/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-pattern": "url(../Archivos_iniciales/img/wave-white.png)",
        "wave-pattern-dots": "url(../Archivos_iniciales/img/pattern-white-dots.png)",
        'pattern-characters-red': "url(../Archivos_iniciales/img/pattern-characters-red.png)",
        'character-mario': "url(../Archivos_iniciales/img/character-l.png)",
        'wave-pink': "url(../Archivos_iniciales/img/wave-pink.png)",
        'yellow-dots': "url(../Archivos_iniciales/img/pattern-yellow-dots.png)",
      },
      screens:{
        'xsm': '320px'
      }
    },
  },
  plugins: [],
};
