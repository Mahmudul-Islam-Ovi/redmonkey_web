module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0b0b0b',
          800: '#141414',
          600: '#ff7a18',
        }
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
