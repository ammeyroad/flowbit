module.exports = {
  content: [
    './index.html',
    './node_modules/flowbite/**/*.js',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'light',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Fredoka'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
