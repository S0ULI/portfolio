/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height'
      },
      colors: {
        'color-primary': '#FFAE81',
        'color-secondary': '#77A48E',
        'color-accent': '#CD4132',
        'color-black': '#090909',
        'color-gray-dark': '#404040',
        'color-gray-light': '#606060',
        'color-white': '#ffffff',
        'color-bg': '#161515'
      }
    },
  },
  plugins: [],
}
