import { Card, CardMedia, Grid, Typography } from "@mui/material";

interface SkillCardProps {
  image: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  const { image, text } = props;

  return(
    <Grid item xs={6} sm={4} md={3}>
      <Card  sx={{ borderRadius: "5%" }}>
        <CardMedia component="img" src={image} alt="c-sharp" sx={{padding: 1}} />
        <Typography variant="h6" align="center">{text}</Typography>
      </Card>
    </Grid>
  );
}