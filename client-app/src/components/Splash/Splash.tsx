import "../../styles/App.css";
import { Box, Button, createTheme, responsiveFontSizes, ThemeProvider, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Canvas from "./Canvas";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Splash() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

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
      <ThemeProvider theme={theme}>
        <Typography variant="h4" align="center" color="white" noWrap={true} gutterBottom>
          <span>Hello, I'm&nbsp;</span>
          <span className="highlighted-text">Ryan Cathcart</span>
          <span>,<br />a full-stack web developer.</span>
        </Typography>
      </ThemeProvider>
      <Link to="About" smooth={true} offset={-48}>
        <Button size="large" variant="contained" color="inherit">
          View my work&nbsp;
          <ArrowForwardRoundedIcon fontSize="small" />
        </Button>
      </Link>
    </Box>
  );
}
