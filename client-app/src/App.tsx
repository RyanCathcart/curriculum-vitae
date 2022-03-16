import "./styles/App.css";
import Splash from "./components/Splash/Splash";
import About from "./components/About/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./styles/customTheme";

export default function App() {
  const theme = customTheme;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Splash />
        <Navbar />
        <About />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
