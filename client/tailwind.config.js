/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { "max": "500px" }
    },
    fontFamily: {
      'cursive': ['Single Day']
    },
    extend: {},
  },
  plugins: []
}

