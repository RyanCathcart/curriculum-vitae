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
      main: "hsl(120, 100%, 27%)",
      dark: "hsl(120, 100%, 20%)",
      light: "hsl(120, 100%, 40%)",
      contrastText:"#FFFFFF"
    },
  },
  customPalette: {
    darker: "#00171F",
  },
  shape: {
    borderRadius: 0,
  },
});