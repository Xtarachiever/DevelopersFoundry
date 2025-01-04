module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
      'primary_dark': '#09080A',
      'gray':'#393449',
      'brown':'#582411',
      'light_brown':'#AA4929',
      'dark_gray':'#5E565A',
      'dull_gray':'#939285',
      'stained_white':'#C3C3C2',
      'gray2':'#4347C1',
      'orange':'#ffa500'
      },
      gridTemplateColumns: {
        'fill-300': 'repeat(auto-fill, minmax(270px, 1fr))',
      },
      zIndex:{
        '10':'10',
        '99':'99'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}