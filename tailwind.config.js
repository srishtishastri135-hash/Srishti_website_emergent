/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        'gradient-start': '#9BC2FF',
        'gradient-mid': '#6EA6FF',
        'gradient-end': '#3B62FF',
        'mist-blue': '#EAF2FF',
        'sand': '#E8DFD6',
        'sage': '#A7C4B5',
      },
    },
  },
  plugins: [],
};
