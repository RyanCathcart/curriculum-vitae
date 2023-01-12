import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import reactivitiesThumb from "../../assets/portfolio/reactivities.png";
import devSiteThumb from "../../assets/portfolio/dev-site.png";
import eCommerceStoreThumb from "../../assets/portfolio/e-commerce-store.png";

const cards = [
  {
    id: 1,
    title: "Reactivities",
    image: reactivitiesThumb,
    imageAltText: "Reactivities",
    description:
      "A full-stack React application that allows users to create an account and post activities/meetups to a public dashboard. Utilizes an ASP.NET Core API back-end.",
    demoLink: "https://rwc-reactivities.herokuapp.com/",
    repoLink: "https://github.com/RyanCathcart/reactivities-udemy",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    image: eCommerceStoreThumb,
    imageAltText: "E-Commerce Store",
    description:
      "A mock E-store application made with React and .NET 6 that allows users to log-in, browse (fake) products, and make payments using Stripe payment infrastructure.",
    demoLink: "https://rwc-react-ecommerce.herokuapp.com/",
    repoLink: "https://github.com/RyanCathcart/react-ecommerce-store",
  },
  {
    id: 3,
    title: "Developer Portfolio",
    image: devSiteThumb,
    imageAltText: "Developer Portfolio",
    description:
      "The website that you're currently using is a React application designed using Material UI and employs an EmailJS email service.",
    demoLink: "/",
    repoLink: "https://github.com/RyanCathcart/developer-portfolio",
  },
  {
    id: 4,
    title: "And more to come",
    image: undefined,
    imageAltText: "And more to come",
    description: "I'm always working on a personal project. Check out my GitHub profile to see what's in store!",
    demoLink: "#",
    repoLink: "#",
  },
];

export default function Portfolio() {
  return (
    <Box className="Portfolio" sx={{ backgroundColor: "hsl(0, 0%, 95%)" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
