import "../../styles/App.css";
import portrait from "../../assets/portrait.jpg";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";

export default function About() {
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <CardContent>
        <CardMedia
          component="img"
          image={portrait}
          alt="portrait"
          sx={{ p: { xs: 8, sm: 0, md: 4 }, borderRadius: "50%" }}
        />
        <Typography variant="h4" align="center" gutterBottom>
          Bio
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, quaerat debitis perferendis natus, atque
          voluptate ducimus illum reprehenderit soluta velit architecto molestiae, odit deleniti ab harum quos ex quod
          veritatis!
        </Typography>
      </CardContent>
    </Box>
  );
}
