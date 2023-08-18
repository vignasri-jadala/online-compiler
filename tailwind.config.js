module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-once': 'spin 1s ease-in once',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
