import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';

// Configuration for the custom theme being used for Material UI for React
// The default theme object's properties that can be overidden are described at this link:
// https://mui.com/material-ui/customization/default-theme/
// This video explains how to do this in more detail: https://www.youtube.com/watch?v=ZyQlpX7lCRE
export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(221, 27%, 14.5%)',
    },
    secondary: {
      main: 'rgba(0, 179, 214, 1)',
    },
    background: {
      paper: 'hsl(221, 27%, 8%)',
      default: '#0f121a',
    },
    deepBackground: {
      main: 'rgb(16, 22, 30)',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '3.75rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    body1: {
      fontSize: '1.3rem',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {}

  interface ThemeOptions {}

  interface Palette {
    deepBackground?: PaletteColor;
  }

  interface PaletteOptions {
    deepBackground?: PaletteColorOptions;
  }
}
