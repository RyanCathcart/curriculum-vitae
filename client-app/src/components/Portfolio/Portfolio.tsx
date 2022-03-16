import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import reactivitesThumb from "../../assets/portfolio/reactivities.png";

export default function Portfolio() {
  return (
    <Box sx={{ backgroundColor: "hsl(0, 0%, 95%)" }}>
      <Container className="Portfolio" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ paddingBottom: 1 }}>
          <Box sx={{ fontWeight: "bold" }}>PORTFOLIO</Box>
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ paddingBottom: 6 }}>
          <Box>Here are some of the projects I've been working on:</Box>
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Card raised>
              <CardMedia component="img" height="200" image={reactivitesThumb} alt="reactivies-img" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reactivities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
                <Button size="small">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card raised>
              <CardMedia component="img" height="200" image={reactivitesThumb} alt="reactivies-img" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reactivities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
                <Button size="small">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card raised>
              <CardMedia component="img" height="200" image={reactivitesThumb} alt="reactivies-img" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reactivities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
                <Button size="small">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card raised>
              <CardMedia component="img" height="200" image={reactivitesThumb} alt="reactivies-img" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reactivities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, magnam.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View Demo</Button>
                <Button size="small">GitHub</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
