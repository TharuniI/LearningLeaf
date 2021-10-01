module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pastel-green': '#99FF85',
        'pastel-orange': '#FFBF70',
        'pastel-red': '#FF7070',
        'pastel-grey': '#1A1A1D'
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
