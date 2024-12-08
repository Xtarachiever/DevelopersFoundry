/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./js/**/*.js'],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1150px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['"Red Hat Display"', 'sans-serif'],
      },
      colors:{
        'dark-blue':'rgba(21, 16, 131, 1)',
        'light-blue':'rgba(68, 137, 252, 1)',
        'blue':'rgba(43, 95, 254, 1)',
        'gray':'rgba(119, 126, 144, 1)',
        'gray2':'rgba(103, 115, 149, 1)',
        'gray3':'rgba(208, 211, 218, 1)',
        'peach':'rgba(255, 180, 156, 1)',
        'gray5':'rgba(211, 207, 222, 1)',
        'red':'rgba(239, 70, 111, 1)',
        'orange-peach':'rgba(220, 86, 43, 1)',
        'light-peach':'rgba(255, 208, 182, 0.65)',
        'yellow':'rgba(243, 186, 47, 1)'
      },
      borderRadius:{
        'lg':'10px'
      },
      zIndex:{
        '1':1,
        '2':2
      },
      gridTemplateColumns: {
        'fill-300': 'repeat(auto-fill, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}

