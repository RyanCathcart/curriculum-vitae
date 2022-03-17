import "../../styles/App.css";
import portrait from "../../assets/portrait.jpg";
import { Box, CardContent, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        height: "100%",
      }}
    >
      <CardContent>
        <Box component="div" sx={{ px: { xs: 3, sm: 0, md: 2 }, paddingBottom: 4 }}>
          <img
            src={portrait}
            alt="portrait"
            draggable={false}
            style={{
              width: "100%",
              border: "3px solid hsl(0, 0%, 100%)",
              borderRadius: "50%",
              boxShadow: "0px 1px 10px #555",
            }}
          />
        </Box>
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
