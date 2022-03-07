import { Box, Button, Typography } from "@mui/material";
import "../../styles/App.css";
import Canvas from "./Canvas";

export default function Splash() {
  return (
    <div className="Splash">
      <Canvas />
      <Box
        component="div"
        sx={{
          display: "flex",
        }}
      >
        <Typography
          className="splash-text"
          variant="h4"
          align="center"
          color="white"
          marginRight={1}
          noWrap={true}
        >
          Hello, I'm  
        </Typography>
        <Typography
          className="splash-text"
          variant="h4"
          align="center"
          noWrap={true}
          color="LimeGreen"
        >
          Ryan Cathcart
        </Typography>
        <Typography
          className="splash-text"
          variant="h4"
          align="center"
          color="white"
          noWrap={true}
        >
          ,
        </Typography>
      </Box>
      <Typography
        className="splash-text"
        variant="h4"
        align="center"
        noWrap={true}
        paragraph={true}
        color="white"
      >
        a full-stack web developer.
      </Typography>
      <Button size="large" variant="outlined" color="primary">View my work</Button>
    </div>
  );
}
