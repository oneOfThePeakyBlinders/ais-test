/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-img': "url('./src/assets/images/IMG_20210312_140957_174 1.png')",
      }
    },
  },
  plugins: [],
}

