import '../../styles/App.css';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import AboutTypography from './AboutTypography';
import StyledPortrait from './StyledPortrait';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function About() {
  const handleClick = (link: string) => {
    link === '/' ? window.location.replace(link) : window.open(link);
  };

  return (
    <Box
      className='About'
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 20, md: 24 },
        backgroundColor: customTheme.palette.deepBackground?.main,
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          color='white'
          align='center'
          sx={{ pb: 4, fontWeight: 'bold' }}
        >
          ABOUT
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <StyledPortrait />
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
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
                  handleClick(
                    'https://www.linkedin.com/in/ryan-cathcart-4b4503128/'
                  );
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box>
              <AboutTypography color='white'>
                I'm a 24 year old full-stack web developer based in New Jersey.
                I'm driven to bring both functional and appealing apps to the
                web. If you would like to contact me, check out the form below!
              </AboutTypography>
              <br />
              <AboutTypography color='white'>
                Over the past 10+ years I've been expanding my capabilities as a
                software developer. By familiarizing myself with multiple
                programming languages and frameworks, I've been able to design
                and create solutions to problems in both native desktop and web
                environments. These days my time is spent researching,
                designing, prototyping, and coding. In my free time, you'll find
                me travelling, playing guitar, and enjoying my favorite video
                games.
              </AboutTypography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
