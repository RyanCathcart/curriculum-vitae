import { Card, CardMedia, Grid, Typography } from '@mui/material';

interface SkillCardProps {
  image: string;
  imageAltText: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  const { image, imageAltText, text } = props;

  return (
    <Grid item xs={4} sm={4} md={3}>
      <Card sx={{ borderRadius: '5%', height: '100%' }}>
        <CardMedia component='img' src={image} alt={imageAltText} sx={{ padding: 1 }} draggable={false} />
        <Typography variant='subtitle2' align='center'>
          {text}
        </Typography>
      </Card>
    </Grid>
  );
}
