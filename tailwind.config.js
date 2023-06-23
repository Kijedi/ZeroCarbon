const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', ...defaultTheme.fontFamily.sans]
      },
      animation:{
        fade: 'fadeOut 5s ease-in-out',
      },
      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
      
      colors: {       
        'buttercup': '#F59E0B',
        'primary': '#00695c',

      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
