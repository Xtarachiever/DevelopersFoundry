module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'faint_green':'#D0E8DF',
        'green':'#2BDA53',
        'cyan_blue':'#013C61',
        'gray':'#D8D8D8',
        'faint_cyan_blue':'#6A7E8A',
        'gray1':'#F6F8F8',
      },
      boxShadow:{
        'md': 'box-shadow: 0px 8px 24px rgba(234,238,233)'
      },
      zIndex:{
        '2':'2',
        '10':'10'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}