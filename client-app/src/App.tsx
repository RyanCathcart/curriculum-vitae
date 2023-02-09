import './styles/App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from './styles/customTheme';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import FloatingNav from './components/Navigation/FloatingNav';
import About from './components/About/About';

export default function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <Hero />
        <FloatingNav />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
