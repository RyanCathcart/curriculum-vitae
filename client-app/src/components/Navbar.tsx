import { AppBar, Box, Button, Grid, Toolbar } from "@mui/material";

export default function Navbar() {
  const pages = ["Home", "About", "Portfolio", "Contact"];

  return (
    <Grid container className="Navbar">
      <AppBar position="sticky" color="primary">
        <Toolbar>
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} sx={{ color: "black", display: "block" }}>
                  {page}
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid item xs={1} md={2} />
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
