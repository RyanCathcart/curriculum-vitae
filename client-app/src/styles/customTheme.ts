import { createTheme } from '@mui/material';

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
      main: 'rgba(0, 180, 216, 1)',
    },
    background: {
      paper: 'hsl(221, 27%, 8%)',
      default: 'hsl(221, 27%, 8%)',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '3.75rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
  },
});

declare module '@mui/material/styles' {
  interface Theme {}

  interface ThemeOptions {}
}
