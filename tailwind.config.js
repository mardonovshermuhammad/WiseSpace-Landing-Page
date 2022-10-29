/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF6B35',
          900: '#FF4400'
        },
        primary: {
          900: '#002F5F'
        },
        blue : {
          500 : '#4270F7'
        },
        rgb:{
         blue:{
          500: 'rgba(0, 47, 95, 0.6)'
         }
        }
      },
      boxShadow: {
        'bxShadow': '0px 0px 8px rgba(0, 0, 0, 0.1)',
        'modalShadow': '0px 4px 20px rgba(0, 0, 0, 0.25)',
      },
      letterSpacing:{
        little : '0.8px'
      },
    },
    
    fontFamily:{
      'Mregular' : ['Montserrat-Regular', 'sans-serif'],
      'Mmedium' : ['Montserrat-Medium', 'sans-serif'],
      'Msemibold' : ['Montserrat-SemiBold', 'sans-serif'],
      'Mbold' : ['Montserrat-SemiBold', 'sans-serif'],
    }


  },
  plugins: [],
};
