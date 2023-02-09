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
        backgroundColor: customTheme.palette.deepBackground?.main,
        minHeight: '100vh',
        py: { xs: 4, md: 16 },
      }}
    >
      <Container maxWidth='lg'>
        <Bio />
        <Skills />
      </Container>
    </Box>
  );
}
