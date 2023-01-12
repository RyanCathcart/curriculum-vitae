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
      dark: 'hsl(221, 27%, 8%)',
    },
    secondary: {
      main: 'rgba(0, 180, 216, 1)',
    },
  },
  shape: {
    borderRadius: 4,
  },
  customPalette: {
    bgDark: 'hsl(224, 16.9%, 17.5%)',
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      bgDark: string;
    };
  }

  interface ThemeOptions {
    customPalette: {
      bgDark: string;
    };
  }
}
