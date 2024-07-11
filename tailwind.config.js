/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,njk}'],

  theme: {
    extend: {
      fontFamily: {
        'sans':  ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}