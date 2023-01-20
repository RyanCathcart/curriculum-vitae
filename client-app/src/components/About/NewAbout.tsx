import '../../styles/App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import StyledPortrait from './StyledPortrait';

export default function About() {
  return (
    <Box className='About' sx={{ backgroundColor: customTheme.palette.background.default, minHeight: '100vh', py: 8 }}>
      <Container maxWidth='lg'>
        <Typography variant='h2' color='white' gutterBottom sx={{ fontWeight: 'bold' }}>
          ABOUT
        </Typography>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <StyledPortrait />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant='body1' color='white' align='center'>
              I'm a 24 year old full-stack web developer based in New Jersey. I'm driven to bring both functional and
              appealing apps to the web. If you would like to contact me, check out the form below!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
