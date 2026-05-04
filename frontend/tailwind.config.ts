import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        uda: {
          yellow: '#FFD700',
          'yellow-hover': '#E6C200',
          'yellow-light': '#FFF4CC',
          green: '#006B3F',
          'green-hover': '#005530',
          'green-light': '#E6F5EE',
          red: '#C8102E',
          'red-hover': '#A00D25',
          'red-light': '#FDE8EC',
          black: '#111111',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}

export default config