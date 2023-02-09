import { Box, Button, keyframes } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { customTheme } from '../../styles/customTheme';
import { Link } from 'react-scroll';
import P5Canvas from '../Hero/P5Canvas';
import HeroTypography from './HeroTypography';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  useEffect(() => {
    function handleResize() {
      setViewportHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      className='Hero Home'
      height={viewportHeight}
      sx={{
        position: 'relative',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow:
          '0 -10vh 5vh -5vh inset ' + customTheme.palette.deepBackground?.main,
      }}
    >
      <P5Canvas />
      <Box sx={{ pl: '5%', animation: `${fadeIn} 5s` }}>
        <HeroTypography color='text.primary'>Hi, I'm&nbsp;</HeroTypography>
        <HeroTypography color='secondary.main'>Ryan Cathcart</HeroTypography>
        <HeroTypography color='text.primary'>
          ,<br />a full-stack web developer.
          <br />
        </HeroTypography>
        <Link to='About' smooth={true}>
          <Button
            variant='outlined'
            size='large'
            color='secondary'
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{ mt: 2, py: 1.5 }}
          >
            View my work&nbsp;
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
