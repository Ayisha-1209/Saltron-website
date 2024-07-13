/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./**/*{html}','./pages/**/*.html'],
  theme: {
    extend: {
      colors: {
        "primary": "#01051e",
        "primary-light": "#020726",
        "primary-dark": "#010417",
        "paragraph": '#c0c0c0',
        "secondary": "#ff7d3b",
        "grey": "#333",
        "white": "#fff",
        "blob": "#A427DF",
        "battery": "#3E7CA4",
        "blue" : "#1C4D87"
      },
      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      }
    },
    container: {
      center: true
    },
  },
  plugins: [],
}



