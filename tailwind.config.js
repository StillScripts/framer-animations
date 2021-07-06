//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-light': '#5472d3',
        'primary-main': '#0d47a1',
        'primary-dark': '#002171',
        'secondary-light': '#ffe082',
        'secondary-main': '#ffca28',
        'secondary-dark': '#ffb300' 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}