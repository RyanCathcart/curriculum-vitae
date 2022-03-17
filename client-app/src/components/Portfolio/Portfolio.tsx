import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import reactivitiesThumb from "../../assets/portfolio/reactivities.png";

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
          <ProjectCard
            title="Reactivities"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores."
            image={reactivitiesThumb}
            imageAltText="Reactivities"
            demoLink="https://rwc-reactivities.herokuapp.com/"
            repoLink="https://github.com/RyanCathcart/reactivities-udemy"
          />
        </Grid>
      </Container>
    </Box>
  );
}
