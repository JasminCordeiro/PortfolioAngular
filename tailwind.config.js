/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {display: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus']},
    colors: {
      'mypurple': '#7957cc',
      'myblack': '#151515',
      'mygray': '#d9d9d9',
      'mygray2': '#212121',
      'mygray3': '#313131',
      'myblackone': '#111111',
      'mybg': '#151515',
      'mywhite': '#ffffff',
      'mypurple-dark': '#5b4199',



    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
      'custom': ['MyCustomFont', 'sans-serif'],
    }
  },
  variants: {},
  plugins: [require('flowbite/plugin')],
}
