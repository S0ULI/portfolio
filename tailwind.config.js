/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(-0.5rem)' },
          '50%' : { transform: 'translateY(0.5rem)' }
        }
      },
      animation: {
        'move': 'move 2s ease-in-out infinite'
      },
      backgroundImage: {
        'background-pattern': "url('/image/bg.png')"
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },

      // COlORS
      // COlORS
      // COlORS
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
