import "./styles/App.css";
import Splash from "./components/Splash/Splash";
import About from "./components/About";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./styles/customTheme";
import Navbar from "./components/Navbar";

export default function App() {
  const theme = customTheme;
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <Splash />
        <Navbar />
        <About />
      </ThemeProvider>
    </div>
  );
}
