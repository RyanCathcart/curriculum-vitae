import '../../styles/App.css';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import AboutTypography from './AboutTypography';
import StyledPortrait from './StyledPortrait';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useInView } from 'react-intersection-observer';
import { handleClick } from '../../util/handleClick';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  const fadeInTransition = {
    opacity: inView ? 1 : 0,
    translate: inView ? '0px' : '-5vw',
    filter: inView ? 'none' : 'blur(3px)',
    transition: '1s ease-in-out',
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
      <Container ref={ref} maxWidth='lg'>
        <Typography
          variant='h2'
          color='white'
          align='center'
          sx={{
            ...fadeInTransition,
            pb: { xs: 2, md: 8 },
            fontWeight: 'bold',
          }}
        >
          ABOUT
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ ...fadeInTransition, transitionDelay: '200ms' }}
        >
          <Grid item xs={12} sm={4}>
            <StyledPortrait />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: { xs: 0, md: 2 },
                pb: 4,
              }}
            >
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
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ mt: { md: '-104px' } }}>
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
                environments. These days, my time is spent researching,
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
