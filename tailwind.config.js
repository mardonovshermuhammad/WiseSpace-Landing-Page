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
        }
      },
    },
  },
  plugins: [],
};