/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {display: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus']},
    colors: {
      'mypurple': '#7957cc',
      'myblack': '#151515',
      'mygray': '#d9d9d9',
      'myblackone': '#111111',
      'mybg': '#151515',
      'mywhite': '#ffffff',


    },
    fontFamily:{
      'sans': ['Roboto', 'sans-serif'],
      'custom': ['MyCustomFont', 'sans-serif'],
    }
  },
  variants: {},
  plugins: [],
}
