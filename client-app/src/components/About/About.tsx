import "../../styles/App.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import Bio from "./Bio";
import Skills from "./Skills";

export default function About() {
  return (
    <Container className="About" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" sx={{ paddingBottom: 8 }}>
      <Box sx={{ fontWeight: 'bold' }}>ABOUT</Box>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Bio />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Skills />
        </Grid>
      </Grid>
    </Container>
  );
}
