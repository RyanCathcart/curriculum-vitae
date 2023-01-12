import '../../styles/App.css';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Bio from './Bio';
import Skills from './Skills';
import { customTheme } from '../../styles/customTheme';

export default function About() {
  return (
    <Box className='About' sx={{ backgroundColor: customTheme.palette.primary.dark }}>
      <Container className='About' maxWidth='lg' sx={{ py: 8 }}>
        <Typography variant='h2' color='white' align='center' sx={{ paddingBottom: 6, fontWeight: 'bold' }}>
          ABOUT
        </Typography>
        <Card raised>
          <Grid container spacing={2} alignItems='stretch'>
            <Grid item xs={12} sm={4}>
              <Bio />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Skills />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
