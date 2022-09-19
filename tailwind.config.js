/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    keyframes: {
      'slide-up-grow': {
        '0%': {
          opacity: '0',
          transform: 'translateY(100%) scale(0)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0) scale(1)',
        },
      },
      'slide-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-100%)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      blink: {
        '0%': {
          opacity: '1',
        },
        '50%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
    },
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
      },
    },
    screens: {
      xs: '400px',
    },
    fontFamily: {
      sans: ['Consolas', 'monospace'],
      consolas: ['Consolas', 'monospace'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
}
