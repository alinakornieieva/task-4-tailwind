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
        backgroundColor: '#0ea5e9',
        padding: '.5rem 1rem',
        color: '#fff',
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
      },
      '.form-component': {
        display: 'none',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#e1e5ea',
        width: '500px',
      },
      '.show': {
        display: 'block'
      }
    })
  })],
}


