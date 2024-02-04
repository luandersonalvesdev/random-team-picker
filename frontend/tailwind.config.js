/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-app': '#1AEBB6',
        'main-app-200': '#13BA90',
        'main-app-300': '#0F9876',
        'main-app-dark': '#053126',
        'main-app-light': '#1DFFC6',
        'secondary-app': '#2191FB',
      },
      spacing: {
        '2%': '2%'
      }
    },
  },
  plugins: [],
}

