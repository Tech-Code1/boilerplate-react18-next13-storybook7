/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px'
    },

    fontFamily: {
      title: ['Roboto Slab', 'sans-serif'],
      body: ['Ubuntu', 'sans-serif']
    },

    extend: {
      colors: {
        primary: {
          purpleNeutral: '#6C63FF'
        },

        secondary: {
          salmonNeutral: '#FF6584'
        },

        white: {
          principal: '#FFFFFF',
          alternative: '#F8F8F8'
        },

        black: {
          principal: '#111827',
          alternative: '#1F2937'
        },

        gray: {
          grayLight: '#E6EBEF'
        },

        error: {
          redLight: '#FFDACE',
          redDark: '#C20707'
        },

        success: {
          greenLight: '#E4FFD8',
          greenDark: '#42B462'
        }
      }
    }
  },
  plugins: []
}
