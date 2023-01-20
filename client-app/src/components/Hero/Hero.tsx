import { Box, Button, keyframes } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { customTheme } from '../../styles/customTheme';
import { Link } from 'react-scroll';
import P5Canvas from '../Hero/P5Canvas';
import HeroTypography from './HeroTypography';

export default function Hero() {
  const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  return (
    <Box
      className='Hero Home'
      height='100vh'
      sx={{
        position: 'relative',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0 -10vh 5vh -5vh inset ' + customTheme.palette.background.default,
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
