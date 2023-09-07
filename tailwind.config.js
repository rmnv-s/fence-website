/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      s: '1rem',
      sm: '1.4rem',
      base: '1.6rem',
      m: '1.8rem',
      l: '2.4rem',
      xl: '3rem',
      '2xl': '3.2rem',
      // '3xl': '1.953rem',
    },
    extend: {
      gridTemplateColumns: {
        'auto-fit-380px': 'repeat(auto-fit, minmax(380px, 1fr))',
      },

      maxWidth: {
        100: '1300px',
      },
      colors: {
        whiteFont: '#D9D9D9',
        white: '#F2F2F2',
        black: '#181818',
        yellow: '#FAFF00',
        grey: '#E4E4E4',
        greyFont: '#868686',
        bgwhite: '#ffffff',
      },
    },
  },
  plugins: [],
};
