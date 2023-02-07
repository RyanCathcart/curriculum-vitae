import '../../styles/App.css';
import { Box, Container } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import Carousel from 'react-material-ui-carousel';
import Bio from './Bio';
import Skills from './Skills';

export default function About() {
  return (
    <Box className='About' sx={{ backgroundColor: customTheme.palette.background.default, minHeight: '100vh', py: 8 }}>
      <Container maxWidth='lg'>
        <Carousel animation='slide' autoPlay={false} navButtonsAlwaysVisible height='100vh'>
          <Bio />
          <Skills />
        </Carousel>
      </Container>
    </Box>
  );
}
