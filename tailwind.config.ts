/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    colors: {
      primary_color: '#332',
      secondary_color: '#123',
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      spacing: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [require('preline/plugin'), require('flowbite/plugin')],
};
