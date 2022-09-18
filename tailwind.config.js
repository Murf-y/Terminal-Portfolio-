/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2E9025',
        light: '#2ACA3E',
        lighter: '#CDF7D6',
        greyish: '#A6B1A9',
      },
      red: '#FD6059',
      yellow: '#FFC13F',

      blue: {
        DEFAULT: '#17191D',
        light: '#1C1E23',
        lighter: '#27282E',
      }
    },
    screens: {
      'xs' : '400px'
    },
    fontFamily: {
      'sans': ['Consolas', 'monospace'],
      'consolas': ['Consolas', 'monospace'],
    }
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    }
  },
  plugins: [
  ],
}
