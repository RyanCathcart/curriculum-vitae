import { Box, Button, createTheme, responsiveFontSizes, ThemeProvider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import Canvas from '../Splash/Canvas';
import { Link } from 'react-scroll';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { customTheme } from '../../styles/customTheme';

export default function Hero() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box className='Hero' component='div' height={dimensions.height} sx={{background: customTheme.customPalette.bgDark}}>
      {/*<Canvas />*/}
      <Box sx={{ p: '10%' }}>
        <ThemeProvider theme={theme}>
          <Typography variant='h4' align='left' color='white' noWrap={true} gutterBottom sx={{ fontWeight: 500 }}>
            <span>Hello, I'm&nbsp;</span>
            <span className='highlighted-text'>Ryan Cathcart</span>
            <span>
              ,<br />a full-stack web developer.
            </span>
          </Typography>
        </ThemeProvider>
        <Link to='About' smooth={true} offset={-48}>
          <Button size='large' variant='contained' color='inherit'>
            View my work&nbsp;
            <ArrowForwardRoundedIcon fontSize='small' />
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
