import { Box, Button, Card, CardHeader, CardMedia, Grid } from "@mui/material";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAltText: string;
  demoLink: string;
  repoLink: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, image, imageAltText, demoLink, repoLink } = props;

  const cardMediaHeight = 200;
  const transition = "0.4s ease";

  return (
    <Grid item xs={12} sm={6}>
      <Card raised>
        <CardHeader title={title} subheader={description} />
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: cardMediaHeight,
            "&:hover .hidden-button": {
              filter: "opacity(100%)",
              transition: transition,
            },
          }}
        >
          <CardMedia
            component="img"
            height={cardMediaHeight}
            src={image}
            alt={imageAltText}
            sx={{
              position: "absolute",
              objectFit: "cover",
              filter: "blur(0)",
              transition: transition,
              "&:hover": {
                filter: "blur(0.25em)",
                transition: transition,
              },
            }}
          />
          <Button
            className="hidden-button"
            variant="outlined"
            size="small"
            href={demoLink}
            sx={{
              filter: "opacity(0%)",
              transition: transition,
              flex: 1,
              
            }}
          >
            View Demo
          </Button>
          <Button
            className="hidden-button"
            variant="outlined"
            size="small"
            href={repoLink}
            sx={{
              filter: "opacity(0%)",
              transition: transition,
              flex: 1,
            }}
          >
            GitHub
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}
