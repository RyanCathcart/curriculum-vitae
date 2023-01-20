import '../../styles/App.css';
import portrait from '../../assets/portrait.jpg';
import { Box, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Bio() {
  const handleClick = (link: string) => {
    link === '/' ? window.location.replace(link) : window.open(link);
  };

  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        height: '100%',
      }}
    >
      <CardContent>
        <Box component='div' sx={{ px: { xs: 3, sm: 0, md: 2 }, paddingBottom: 4 }}>
          <img
            src={portrait}
            alt='portrait'
            draggable={false}
            style={{
              width: '100%',
              border: '3px solid hsl(0, 0%, 100%)',
              borderRadius: '50%',
              boxShadow: '0px 1px 10px #555',
            }}
          />
        </Box>
        <Typography variant='h4' color='white' align='center' gutterBottom>
          Bio
        </Typography>
        <Typography variant='body1' color='white' align='center'>
          I'm a 24 year old full-stack web developer based in New Jersey. I'm driven to bring both functional and
          appealing apps to the web. If you would like to contact me, check out the form below!
        </Typography>
      </CardContent>
      <CardActions>
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
      </CardActions>
    </Box>
  );
}
