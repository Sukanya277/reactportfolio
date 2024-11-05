/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this line to match your file structure
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#effbf8', // Add a name for your custom color
      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
      },
    },
  },

  plugins: [],


}
