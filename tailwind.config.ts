import type { Config } from 'tailwindcss'


const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#201a1b',
      elevated: '#282022',
      elevated2: '#3D3033',
      elevated4: '#1E1A1B',
      elevated3: '#32272A',
      onBackground: '#ece0e0',
      primary: '#ffb2bc',
      primaryContainer: '#7d293b',
      onPrimaryContainer: '#ffd9dd',
      onPrimary: '#5f1125',
      fritilariaGreen: '#B2FFCF',

    },
    extend: {
      colors: {
        ...colors,
        transparent: colors.transparent
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
        require('@tailwindcss/forms'),
  ],
}
export default config
