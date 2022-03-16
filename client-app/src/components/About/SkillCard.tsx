import { Card, CardMedia, createTheme, Grid, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";

interface SkillCardProps {
  image: string;
  text: string;
}

export default function SkillCard(props: SkillCardProps) {
  const { image, text } = props;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Grid item xs={4} sm={4} md={3}>
      <Card sx={{ borderRadius: "5%" }}>
        <CardMedia component="img" src={image} alt="c-sharp" sx={{ padding: 1 }} />
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle2" align="center">
            {text}
          </Typography>
        </ThemeProvider>
      </Card>
    </Grid>
  );
}
