import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import React from 'react'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

export const theme = createTheme({
  palette: {
    primary: {
      light: '#22aadd',
      main: '#0077c4',
      dark: '#004477',
    },
    secondary: {
      light: '#71dce3',
      main: '#22cdd9',
      dark: '#00a8b9',
    },
    common: {
      white: ' #ffffff',
      black: '#141414',
    },
    grey: {
      100: '#f5f5f5',
      200: '#e1e5ea',
      300: '#c4cbd6',
      400: '#99aabb',
      500: '#628ba9',
    },
    blue: {
      100: '#bbddff',
      200: '#22aadd',
      300: '#0077c4',
      400: '#004477',
    },
    shadowBlack: 'rgba(0, 0, 0, 0.07)',
    shadowBlue: 'rgba(187, 221, 255, 0.4)',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    'size-0': { fontSize: '0rem' },
    'size-1': { fontSize: '0.25rem' },
    'size-2': { fontSize: '0.5rem' },
    'size-3': { fontSize: '0.75rem' },
    'size-4': { fontSize: '1rem' },
    'size-5': { fontSize: '1.25rem' },
    'size-6': { fontSize: '1.5rem' },
    'size-7': { fontSize: '1.75rem' },
    'size-8': { fontSize: '2rem' },
    'size-9': { fontSize: '2.25rem' },
    'size-10': { fontSize: '2.5rem' },
    'size-11': { fontSize: '2.75rem' },
    'size-12': { fontSize: '3rem' },
    'size-13': { fontSize: '3.25rem' },
    'size-14': { fontSize: '3.5rem' },
    'size-16': { fontSize: '3.75rem' },
    'size-17': { fontSize: '4.00rem' },
    'size-18': { fontSize: '4.25rem' },
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  sizes: {
    navigationWidth: 240,
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    blue: Palette['grey']
    shadowBlack: React.CSSProperties['color']
    shadowBlue: React.CSSProperties['color']
  }

  interface PaletteOptions {
    blue?: PaletteOptions['grey']
    shadowBlack?: React.CSSProperties['color']
    shadowBlue?: React.CSSProperties['color']
  }

  interface TypographyVariants {
    'size-0': React.CSSProperties
    'size-1': React.CSSProperties
    'size-2': React.CSSProperties
    'size-3': React.CSSProperties
    'size-4': React.CSSProperties
    'size-5': React.CSSProperties
    'size-6': React.CSSProperties
    'size-7': React.CSSProperties
    'size-8': React.CSSProperties
    'size-9': React.CSSProperties
    'size-10': React.CSSProperties
    'size-11': React.CSSProperties
    'size-12': React.CSSProperties
    'size-13': React.CSSProperties
    'size-14': React.CSSProperties
    'size-15': React.CSSProperties
    'size-16': React.CSSProperties
    'size-17': React.CSSProperties
    'size-18': React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    'size-0'?: React.CSSProperties
    'size-1'?: React.CSSProperties
    'size-2'?: React.CSSProperties
    'size-3'?: React.CSSProperties
    'size-4'?: React.CSSProperties
    'size-5'?: React.CSSProperties
    'size-6'?: React.CSSProperties
    'size-7': React.CSSProperties
    'size-8'?: React.CSSProperties
    'size-9'?: React.CSSProperties
    'size-10'?: React.CSSProperties
    'size-11'?: React.CSSProperties
    'size-12'?: React.CSSProperties
    'size-13'?: React.CSSProperties
    'size-14'?: React.CSSProperties
    'size-15'?: React.CSSProperties
    'size-16'?: React.CSSProperties
    'size-17'?: React.CSSProperties
    'size-18'?: React.CSSProperties
  }

  interface Theme {
    sizes: {
      navigationWidth: number
    }
  }

  interface ThemeOptions {
    sizes: {
      navigationWidth: number
    }
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'size-0': true
    'size-1': true
    'size-2': true
    'size-3': true
    'size-4': true
    'size-5': true
    'size-6': true
    'size-7': true
    'size-8': true
    'size-9': true
    'size-10': true
    'size-11': true
    'size-12': true
    'size-13': true
    'size-14': true
    'size-15': true
    'size-16': true
    'size-17': true
    'size-18': true
  }
}
