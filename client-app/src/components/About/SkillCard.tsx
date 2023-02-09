import { Card, CardMedia, Grid, Typography } from '@mui/material';

interface SkillCardProps {
  image: string;
  imageAltText: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  const { image, imageAltText, text } = props;

  return (
    <Grid item xs={4} md={2}>
      <Card sx={{ borderRadius: '5%', height: '100%' }}>
        <CardMedia component='img' src={image} alt={imageAltText} sx={{ p: 1 }} draggable={false} />
        <Typography
          variant='subtitle2'
          align='center'
          sx={{
            fontSize: {
              xs: '0.7rem',
              sm: '1rem',
              md: '1.3rem',
            },
          }}
        >
          {text}
        </Typography>
      </Card>
    </Grid>
  );
}
