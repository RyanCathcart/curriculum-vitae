import { Box, Container, Typography } from '@mui/material';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <Box className='Contact' component='div' sx={{ pt: 8, pb: 6, backgroundColor: 'primary.main' }}>
      <Container maxWidth='lg'>
        <Typography variant='h2' color='white' align='center' sx={{ pb: 1, fontWeight: 'bold' }}>
          CONTACT
        </Typography>
        <Typography variant='subtitle1' color='white' align='center' sx={{ pb: 6 }}>
          Feel free to contact me by any of my social medias, or by email below:
        </Typography>
        <ContactForm />
      </Container>
    </Box>
  );
}
