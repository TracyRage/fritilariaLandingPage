import type { Config } from 'tailwindcss'


const colors = require('tailwindcss/colors')


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "selector",
  theme: {
    colors: {
      md_theme_light_primary: '#9B4052',
      md_theme_light_onPrimary: '#FFFFFF',
      md_theme_light_primaryContainer: '#FFD9DD',
      md_theme_light_onPrimaryContainer: '#400012',
      md_theme_light_secondary: '#76565A',
      md_theme_light_onSecondary: '#FFFFFF',
      md_theme_light_secondaryContainer: '#FFD9DD',
      md_theme_light_onSecondaryContainer: '#2C1518',
      md_theme_light_tertiary: '#785831',
      md_theme_light_onTertiary: '#FFFFFF',
      md_theme_light_tertiaryContainer: '#FFDDB8',
      md_theme_light_onTertiaryContainer: '#2B1700',
      md_theme_light_error: '#BA1A1A',
      md_theme_light_errorContainer: '#FFDAD6',
      md_theme_light_onError: '#FFFFFF',
      md_theme_light_onErrorContainer: '#410002',
      md_theme_light_background: '#FFFBFF',
      md_theme_light_onBackground: '#201A1B',
      md_theme_light_surface: '#FFFBFF',
      md_theme_light_surface_highest: '#E6E6E6',
      md_theme_light_surface_high: '#ECECEC',
      md_theme_light_surface_container: '#F2F2F2',
      md_theme_light_surface_low: '#F7F7F7',
      md_theme_light_surface_lowest: '#FFFFFF',
      md_theme_light_onSurface: '#201A1B',
      md_theme_light_surfaceVariant: '#F3DDDF',
      md_theme_light_onSurfaceVariant: '#524345',
      md_theme_light_outline: '#847374',
      md_theme_light_inverseOnSurface: '#FBEEEE',
      md_theme_light_inverseSurface: '#362F2F',
      md_theme_light_inversePrimary: '#FFB2BC',
      md_theme_light_shadow: '#000000',
      md_theme_light_surfaceTint: '#9B4052',
      md_theme_light_outlineVariant: '#D7C1C3',
      md_theme_light_scrim: '#000000',
      md_theme_dark_primary: '#FFB2BC',
      md_theme_dark_onPrimary: '#5F1125',
      md_theme_dark_primaryContainer: '#7D293B',
      md_theme_dark_onPrimaryContainer: '#FFD9DD',
      md_theme_dark_secondary: '#E5BDC1',
      md_theme_dark_onSecondary: '#43292D',
      md_theme_dark_secondaryContainer: '#5C3F43',
      md_theme_dark_onSecondaryContainer: '#FFD9DD',
      md_theme_dark_tertiary: '#EABF8F',
      md_theme_dark_onTertiary: '#452B07',
      md_theme_dark_tertiaryContainer: '#5E411C',
      md_theme_dark_onTertiaryContainer: '#FFDDB8',
      md_theme_dark_error: '#FFB4AB',
      md_theme_dark_errorContainer: '#93000A',
      md_theme_dark_onError: '#690005',
      md_theme_dark_onErrorContainer: '#FFDAD6',
      md_theme_dark_background: '#201A1B',
      md_theme_dark_onBackground: '#ECE0E0',
      md_theme_dark_surface: '#201A1B',
      md_theme_dark_surface_highest: '#463C3F',
      md_theme_dark_surface_high: '#3D3437',
      md_theme_dark_surface_container: '#362E31',
      md_theme_dark_surface_low: '#30282B',
      md_theme_dark_surface_lowest: '#2B2528',
      md_theme_dark_onSurface: '#ECE0E0',
      md_theme_dark_surfaceVariant: '#524345',
      md_theme_dark_onSurfaceVariant: '#D7C1C3',
      md_theme_dark_outline: '#9F8C8E',
      md_theme_dark_inverseOnSurface: '#201A1B',
      md_theme_dark_inverseSurface: '#ECE0E0',
      md_theme_dark_inversePrimary: '#9B4052',
      md_theme_dark_shadow: '#000000',
      md_theme_dark_surfaceTint: '#FFB2BC',
      md_theme_dark_outlineVariant: '#524345',
      md_theme_dark_scrim: '#000000',
      fritilariaGreen: '#B2FFCF',

    },
    extend: {

      animation: {

        "loop-scroll": "loop-scroll 90s linear infinite",

      },

      keyframes: {

        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }

      },

      colors: {
        ...colors,
        transparent: colors.transparent
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

export default config
