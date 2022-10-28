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
        }
      },
      boxShadow: {
        'bxShadow': '0px 0px 8px rgba(0, 0, 0, 0.1)',
        'modalShadow': '0px 4px 20px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
};
