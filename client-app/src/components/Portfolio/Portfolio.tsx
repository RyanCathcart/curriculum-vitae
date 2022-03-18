import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import reactivitiesThumb from "../../assets/portfolio/reactivities.png";
import devSiteThumb from "../../assets/portfolio/dev-site.png";

const cards = [
  {
    id: 1,
    title: "Reactivities",
    image: reactivitiesThumb,
    imageAltText: "Reactivities",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores.",
    demoLink: "https://rwc-reactivities.herokuapp.com/",
    repoLink: "https://github.com/RyanCathcart/reactivities-udemy",
  },
  {
    id: 2,
    title: "Developer Portfolio (This site)",
    image: devSiteThumb,
    imageAltText: "Developer Portfolio (This site)",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse laboriosam necessitatibus voluptatem placeat earum, consectetur nulla ea quia obcaecati?",
    demoLink: "/",
    repoLink: "https://github.com/RyanCathcart/developer-portfolio",
  },
  {
    id: 3,
    title: "Other",
    image: undefined,
    imageAltText: "Other",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse laboriosam necessitatibus voluptatem placeat earum, consectetur nulla ea quia obcaecati?",
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "Another",
    image: undefined,
    imageAltText: "Another",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores.",
    demoLink: "#",
    repoLink: "#",
  },
];

export default function Portfolio() {
  return (
    <Box sx={{ backgroundColor: "hsl(0, 0%, 95%)" }}>
      <Container className="Portfolio" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" color="primary" align="center" sx={{ paddingBottom: 1, fontWeight: "bold" }}>
          PORTFOLIO
        </Typography>
        <Typography variant="subtitle1" color="primary" align="center" sx={{ paddingBottom: 6 }}>
          <Box>Here are some of the projects I've been working on:</Box>
        </Typography>
        <Grid container spacing={6} alignItems="stretch">
          {cards.map((card) => (
            <ProjectCard 
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAltText={card.imageAltText}
              demoLink={card.demoLink}
              repoLink={card.repoLink}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
