import { AppBar, Box, Button, Container, Divider, Toolbar } from "@mui/material";
import { Link } from "react-scroll";
import { customTheme } from "../../styles/customTheme";
import SmallScreenMenu from "./SmallScreenMenu";

export default function Navbar() {
  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <AppBar className="Navbar" position="sticky" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense">
          <Box sx={{ justifyContent: "space-around", flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Divider orientation="vertical" flexItem />
            {pages.map((page) => (
              <Box key={page} sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                <Link className="nav-button" to={page} smooth={true} offset={-48}>
                  <Button sx={{ width: "100%", height: "100%", color: "white", display: "block" }}>{page}</Button>
                </Link>
                <Divider orientation="vertical" flexItem />
              </Box>
            ))}
          </Box>
          <SmallScreenMenu pages={pages} />
        </Toolbar>
      </Container>
      <Box sx={{ height: "2px", backgroundColor: `${customTheme.palette.secondary.main}` }} />
    </AppBar>
  );
}
