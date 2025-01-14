module.exports = {
  content: ['./*.html','./js/**/*.js'],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(118, 60, 207, 1)',
        'button-hover': 'rgb(147, 83, 243)',
        'hover-text':'rgb(129, 66, 223)',
        'purple-text':'rgb(68, 24, 133)',
        'purple-button':'rgba(118, 60, 207, 1)',
        'footer':'rgba(67, 35, 97, 1)',
        black: '#000',
        gray:'rgb(117, 117, 117)',
        'light-gray':'rgb(237, 235, 239)'
      },
      boxShadow:{
        'md': 'inset 0 0 1000px rgba(255, 255, 255, 0.9)'
      },
      zIndex:{
        '10':10,
        '2':2,
        '0':0,
        '1':1
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}