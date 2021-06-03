module.exports = {
  purge: [],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white:   '#fff',
      black:   '#000',
      primary: '#E74C3C',
      
      blue:    '#1B7DBE',
      red:     '#E74C3C',
      yellow:  {
        100: '#FFFF00',
        200: '#B59B1A'
      },
      green: {
        100: '#27AE60',
        200: '#477A5C'
      },
      purple: {
        100: '#F228D0',
        200: '#A01C81',
        300: '#C4318A'
      },
    }
  },
  variants: {
    divideColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
