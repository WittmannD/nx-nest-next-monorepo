const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          'emerald': '#4FADAF',
        },
        gray: {
          100: '#dedede',
          200: '#C5C5C5',
          300: '#ADADAD',
          400: '#949494',
          500: '#7B7B7B',
          600: '#636363',
          700: '#4A4A4A',
          800: '#313131',
          900: '#191919',
        }
      },
      fontSize: {
        'small': '14px',
        'regular': '20px',
      }
    },
    fontFamily: {
      body: [],
      sans: ['Montserrat'],
    },
  },
  plugins: [],
};
