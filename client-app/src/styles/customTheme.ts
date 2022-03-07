import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      darker: string;
    };
  }

  interface ThemeOptions {
    customPalette?: {
      darker?: string;
    };
  }
}

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#007EA7",
      dark: "#003459",
      light: "#00A8E8",
    },
  },
  customPalette: {
    darker: "#00171F",
  },
});