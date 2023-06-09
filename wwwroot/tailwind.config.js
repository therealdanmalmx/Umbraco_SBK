
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Views/**/*.cshtml"],
  theme: {
    extend: {
      colors: {
        sbk_green: '#008767',
        sbk_blue: '#005799',
        sbk_red: '#d34823',
        sbk_white: '#F5F5F5',
      },
      fontFamily: {
        'sans': ['"Open Sans"', '"sans-serif"'],
        'body': ['"Open Sans"', '"sans-serif"'],
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};

