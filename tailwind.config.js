/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      s: '1.2rem',
      sm: '1.4rem',
      base: '1.6rem',
      m: '1.8rem',
      l: '2.4rem',
      xl: '3rem',
      '2xl': '3.6rem',
      // '3xl': '1.953rem',
    },
    extend: {
      maxWidth: {
        100: '1300px',
      },
      colors: {
        whiteFont: '#D9D9D9',
        black: '#181818',
        yellow: '#FAFF00',
      },
    },
  },
  plugins: [],
};
