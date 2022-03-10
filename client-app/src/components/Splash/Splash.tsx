import "../../styles/App.css";
import { Box, Button, Typography } from "@mui/material";
import Canvas from "./Canvas";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Splash() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box className="Splash Home" component="div" sx={{ display: "flex" }} height={dimensions.height}>
      <Canvas />
      <Box component="div" sx={{ display: "flex" }}>
        <Typography variant="h4" color="white" marginRight={1} noWrap={true}>
          Hello, I'm
        </Typography>
        <Typography variant="h4" color="LimeGreen" noWrap={true}>
          Ryan Cathcart
        </Typography>
        <Typography variant="h4" color="white" noWrap={true}>
          ,
        </Typography>
      </Box>
      <Typography variant="h4" color="white" noWrap={true} gutterBottom={true}>
        a full-stack web developer.
      </Typography>
      <Link to="About" smooth={true} offset={-64}>
        <Button size="large" variant="contained" color="inherit">
          View my work
        </Button>
      </Link>
    </Box>
  );
}
