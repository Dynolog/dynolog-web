import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      brand300: '#4663F1',
      brand700: '#2238A9',

      blueDarkness300: '#2D3A4F',
      blueDarkness400: '#272c45',
      blueDarkness500: '#0d144F',
      blueDarkness900: '#060923',

      grayDarkness300: '#272734',
      grayDarkness400: '#20222D',
      grayDarkness500: '#161822',
      grayDarkness900: '#0A0C17',

      white500: '#FFFFFF',

      grayLight500: '#9595A9',

      green500: '#43D2A7',

      red500: '#FD3C5A',

      yellow500: '#FDCE26',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
    },
    fonts: {
      untitled: 'Untitled Sans, apple-system, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
