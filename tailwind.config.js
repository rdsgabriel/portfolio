/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#008B8B',
        'theme': '#008B8B',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#008B8B',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  plugins: [],
}
