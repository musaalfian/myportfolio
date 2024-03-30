/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}