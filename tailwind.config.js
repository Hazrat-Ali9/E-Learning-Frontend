/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borderColor: 'rgb(229 231 235 / 1)'
      },
      fontFamily: {
        primary: 'Inter, sans-serif'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

