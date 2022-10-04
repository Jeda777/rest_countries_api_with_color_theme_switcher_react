/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-elements': '#2b3945',
        'dark-bg': '	#202c37',
        'light-text': '#111517',
        'light-input': '#858585',
        'light-bg': '#fafafa',
        'dark-text': '#ffffff',
        'light-elements': '#ffffff',
      },
    },
  },
  plugins: [],
}
