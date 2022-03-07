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
      main: "rgba(56, 176, 0)",
      dark: "#003459",
      light: "#00A8E8",
      contrastText:"#252934"
    },
  },
  customPalette: {
    darker: "#00171F",
  },
  shape: {
    borderRadius: 0,
  },
});