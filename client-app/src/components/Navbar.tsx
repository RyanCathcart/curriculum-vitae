import { AppBar, Box, Button, Toolbar } from "@mui/material";

export default function Navbar() {
  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <div className="Navbar">
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
