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
          500: 'rgba(0, 47, 95, 0.6)',
          900: 'rgba(0, 47, 95, 0.5 )' 
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
      fontFamily:{
        'Mregular' : ['https://fonts.googleapis.com/css2?family=Montserrat&display=swap', sans-serif],
        'Mmedium' : ['https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap', sans-serif],
        'Mbold' : ['https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap', sans-serif],
      },
      animation: {
        spin_words: "spin_words 6s infinite",
        spin_words_mob: "spin_words_mob 6s infinite",
      },
      keyframes: {
        spin_words: {
          "16.5%": { transform: "translateY(-127%)" },
          "33%": { transform: "translateY(-107%)" },
          "49.5%": { transform: "translateY(-238%)" },
          "66%": { transform: "translateY(-220%)" },
          "82.5%": { transform: "translateY(-357%)" },
          "100%": { transform: "translateY(-334%)" },
        },
        spin_words_mob: {
          "16.5%": { transform: "translateY(-135%)" },
          "33%": { transform: "translateY(-118%)" },
          "49.5%": { transform: "translateY(-240%)" },
          "66%": { transform: "translateY(-234%)" },
          "82.5%": { transform: "translateY(-365%)" },
          "100%": { transform: "translateY(-358%)" },
        },
      }
    },
    

  },
  plugins: [],
};
