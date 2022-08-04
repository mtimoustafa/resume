const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './*.{html,js}',
    './partials/**/*.{html,js}',
],
  theme: {
    extend: {
      colors: {
        'f-grey': '#1f1f1f',
        'f-blue': '#159fcb',
      },
      fontFamily: {
        title: ['"Sansita Swashed"', ...defaultTheme.fontFamily.sans],
        text: ['"Signika Negative"', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        'section-item': '25% minmax(0, 1fr)',
      },
    },
  },
  plugins: [],
}
