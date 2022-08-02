const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './*.{html,js}',
    './partials/*.{html,js}',
],
  theme: {
    extend: {
      colors: {
        'f-grey': '#1f1f1f',
        'f-blue': '#159fcb',
      },
      fontFamily: {
        title: ['"Signika Negative"', ...defaultTheme.fontFamily.sans],
        text: ['Unna', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
