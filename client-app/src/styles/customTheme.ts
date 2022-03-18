import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      bgDark: string;
    };
  }

  interface ThemeOptions {
    customPalette?: {
      bgDark?: string;
    };
  }
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "hsl(221, 27%, 14.5%)",
      dark: "hsl(120, 100%, 20%)",
      light: "hsl(120, 100%, 40%)",
      contrastText:"#FFFFFF"
    },
    secondary: {
      main: "rgba(0, 180, 216, 1)"
    }
  },
  shape: {
    borderRadius: 0,
  },
  customPalette: {
    bgDark: "hsl(224, 16.9%, 17.5%)",
  },
});