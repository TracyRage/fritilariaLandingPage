import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      background: '#201a1b',
      onBackground: '#ece0e0',
      primary: '#ffb2bc',
      primaryContainer: '#7d293b',
      onPrimaryContainer: '#ffd9dd',
      onPrimary: '#5f1125',
      fritilariaGreen: '#B2FFCF'

    },
    extend: {
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
