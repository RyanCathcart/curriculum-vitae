import "./styles/App.css";
import Splash from "./components/Splash/Splash";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
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
        <Portfolio />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
