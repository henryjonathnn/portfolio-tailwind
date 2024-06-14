/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem', // Padding default untuk semua ukuran layar selain lg
        lg: '110px' // Padding untuk ukuran layar lg
      },
    },

    extend: {
      colors: {
        primary: '#14b8a6',
        darkblue: '#020617',
        dark: '#0f172a',
        secondary: '#64748b'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

