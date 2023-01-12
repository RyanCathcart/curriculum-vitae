import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { customTheme } from '../../styles/customTheme';
import { Link } from 'react-scroll';
import P5Canvas from '../Hero/P5Canvas';

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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
        boxShadow: '0 -10vh 5vh -5vh inset ' + customTheme.palette.primary.dark,
      }}
    >
      <P5Canvas />
      <Box
        sx={{
          p: '5%',
          animation: 'fadeIn 5s',
        }}
      >
        <Typography
          variant='h4'
          display='inline'
          align='left'
          color='white'
          noWrap={true}
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '1.4rem',
              sm: '2rem',
              md: '3.75rem',
            },
          }}
        >
          Hi, I'm&nbsp;
        </Typography>
        <Typography
          variant='h4'
          display='inline'
          align='left'
          color={customTheme.palette.secondary.main}
          noWrap={true}
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '1.4rem',
              sm: '2rem',
              md: '3.75rem',
            },
          }}
        >
          Ryan Cathcart
        </Typography>
        <Typography
          variant='h4'
          display='inline'
          align='left'
          color='white'
          noWrap={true}
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: '1.4rem',
              sm: '2rem',
              md: '3.75rem',
            },
          }}
        >
          ,<br />a full-stack web developer.
          <br />
        </Typography>
        <Link to='About' smooth={true}>
          <Button size='large' variant='outlined' color='secondary' sx={{ mt: 2, py: 1.5 }}>
            View my work&nbsp;
            <ArrowForwardRoundedIcon fontSize='small' />
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
