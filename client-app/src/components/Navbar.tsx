import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <AppBar className="Navbar" position="sticky" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters variant="dense">
          <Box sx={{ justifyContent: "space-around", flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Divider orientation="vertical" flexItem />
            {pages.map((page) => (
              <Box key={page} sx={{ flexGrow: 1, display: "flex", justifyContent: "center"}}>
                <Link className="nav-button" to={page} smooth={true} offset={-48}>
                  <Button onClick={handleCloseNavMenu} sx={{ width: "100%", height: "100%", color: "white", display: "block" }}>
                    {page}
                  </Button>
                </Link>
                <Divider orientation="vertical" flexItem />
              </Box>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" }, flexDirection: "row-reverse" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page} to={page} smooth={true} offset={-48}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
