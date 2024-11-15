/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          dark: '#1a1a1a',
          paper: '#252525',
          text: '#e0d4c3',
          accent: '#c4a484',
          gold: '#b8860b',
          secondary: '#8b7355'
        }
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
        'playfair': ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}