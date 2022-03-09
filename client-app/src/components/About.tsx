import "../styles/App.css";
import { Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid container className="About">
      <Grid item xs={1} md={2} />
      <Grid
        item
        xs={10}
        md={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "right",
          justifyContent: "center",
          height: "100%",
          padding: 1,
        }}
      >
        <Typography variant="h4">About</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, praesentium. Alias, expedita perferendis.
          Aliquid, laudantium nam! Illum nam minima provident fuga laudantium, magni aliquam cumque nobis eos debitis
          dolor consequuntur. 
        </Typography>
      </Grid>
      <Grid item xs={1} md={2} />
    </Grid>
  );
}
