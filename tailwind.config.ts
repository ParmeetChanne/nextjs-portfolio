import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    //'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        black: '#0B0D13',//#020718',//'#0E141B',//'#090912'//'#0E0E0E'//'#05050D'//'#0F0F0F',
        white: '#EFF1F5',
        light: {
          white: '#fff',
          blue: '#33c1dd'
        },
        dark: {
          blue: '#121821',//'#0f161f', //'#121821',//'#141d29',//'#141b24',//'#191f26',//'#1E262F',
          purple: '#00ddff',
          100: '#e821ff',
          200: "#0078FF",
          300: '#1F2937'
        },
        gradient: {
          purple: '#0078FF',//'#36d1dc',//'#72f',
          pink: '#31c1d4'//'#0078FF'//'#c1b'
        },
      },
      fontFamily: {
        sans: ["Inter"]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
