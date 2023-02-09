import '../../styles/App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from './Footer';
import Hero from '../Hero/Hero';
import FloatingNav from './FloatingNav';
import About from '../About/About';

export default function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <FloatingNav />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
