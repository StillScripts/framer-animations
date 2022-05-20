//const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/components/structures/**/*.{js,ts,jsx,tsx}',
    './src/components/atoms/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/FlowerOfLifeAnimation/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/FlowerOfLifeAnimation/**/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/OrganiseAnimation/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/OrganiseAnimation/**/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/TriangleAnimation/**/*.{js,ts,jsx,tsx}',
    './src/components/molecules/TriangleAnimation/**/**/*.{js,ts,jsx,tsx}',
  ],
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