/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,njk,css}'],

  theme: {
    extend: {
      fontFamily: {
        'sans':  ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}