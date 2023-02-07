import '../../styles/App.css';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledPortrait from './StyledPortrait';

export default function Bio() {
  const handleClick = (link: string) => {
    link === '/' ? window.location.replace(link) : window.open(link);
  };

  return (
    <Box sx={{ p: 8 }}>
      <Typography variant='h2' color='white' gutterBottom sx={{ fontWeight: 'bold' }}>
        ABOUT
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <StyledPortrait />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              color='secondary'
              onClick={() => {
                handleClick('https://github.com/RyanCathcart');
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color='secondary'
              onClick={() => {
                handleClick('https://www.linkedin.com/in/ryan-cathcart-4b4503128/');
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant='body1'
            color='white'
            align='center'
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1rem',
                md: '1.3rem',
              },
            }}
          >
            I'm a 24 year old full-stack web developer based in New Jersey. I'm driven to bring both functional and
            appealing apps to the web. If you would like to contact me, check out the form below!
          </Typography>
          <br />
          <Typography
            variant='body1'
            color='white'
            align='center'
            sx={{
              fontSize: {
                xs: '1rem',
                sm: '1rem',
                md: '1.3rem',
              },
            }}
          >
            Over the past 10+ years I've been expanding my capabilities as a software developer. By familiarizing myself
            with multiple programming languages and frameworks, I've been able to design and create solutions to
            problems in both native desktop and web environments. These days my time is spent researching, designing,
            prototyping, and coding. In my free time, you'll find me travelling, playing guitar, and enjoying my
            favorite video games.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
