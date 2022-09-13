/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#008B8B',
        'theme': '#008B8B',
        'nav': '#404053',
        'secondary': '#cbd5e1',
        'badge': '#008B8B',
        'input-border': '#565666',
        'input': '#2A2A35',
        'teste1': '#003234'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
