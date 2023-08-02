import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [plugin(function ({ addComponents }) {
    addComponents({
      '.btn': {
        padding: '.5rem 1rem',
        borderRadius: '.25rem',
        fontWeight: '600',
        '&:hover': {
          backgroundColor: '#2779bd'
        }
      },
      '.link': {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '1.25rem',
        fontWeight: 600,
      }
    })
  })],
}


