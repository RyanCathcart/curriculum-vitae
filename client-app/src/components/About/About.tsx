import '../../styles/App.css';
import { Box, Container } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import Bio from './Bio';
import Skills from './Skills';

export default function About() {
  return (
    <Box
      className='About'
      sx={{
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Bio />
      <Box
        sx={{
          width: 0,
          height: 0,
          borderLeft: '100vw solid transparent',
          borderBottom: '5vw solid ' + customTheme.palette.background.default,
          marginTop: '-5vw',
        }}
      />
      <Skills />
    </Box>
  );
}
