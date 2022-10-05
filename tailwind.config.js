module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: "rgb(44, 89, 250)",
        secondarydark: "rgb(44, 195, 250)",
      },
      fontFamily: {
        sans: ["'Source Sans Pro'", 'sans-serif'],
        serif: ["'Rokkitt'", 'serif'],
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.9rem',
    },
    boxShadow: {
      DEFAULT: '0px 1px 10px 2px rgb(233, 233, 233)',
    },
  },
  plugins: [],
}