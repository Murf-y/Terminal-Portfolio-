/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'xs' : '400px'
      },
      colors: {
        primary: {
          lighter: '#9af7ff',
          light: '#64c4e2',
          DEFAULT: '#2793b0',
          dark: '#006580',
          darker: '#003b53'
        },
        secondary: {
          lighter: '#ffff83',
          light: '#eaff4e',
          DEFAULT: '#b4cc00',
          dark: '#809b00',
          darker: '#4f6d00',
        },
        gray: colors.slate,
        blue: {
          lighter: '#9af7ff',
          light: '#64c4e2',
          DEFAULT: '#2693b0',
          dark: '#006580',
          darker: '#003b53'
        }
      },
      fontFamily: {
        // sans: [
        //   'Nunito',
        //   'ui-sans-serif',
        //   'system-ui',
        //   '-apple-system',
        //   'BlinkMacSystemFont',
        //   '"Segoe UI"',
        //   'Roboto',
        //   '"Helvetica Neue"',
        //   'Arial',
        //   '"Noto Sans"',
        //   'sans-serif',
        //   '"Apple Color Emoji"',
        //   '"Segoe UI Emoji"',
        //   '"Segoe UI Symbol"',
        //   '"Noto Color Emoji"',
        // ],
        // serif: ['Overlock', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
