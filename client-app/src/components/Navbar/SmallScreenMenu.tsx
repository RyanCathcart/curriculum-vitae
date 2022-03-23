import { Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

interface SmallScreenMenuProps {
  pages: string[];
}

export default function SmallScreenMenu(props: SmallScreenMenuProps) {
  const { pages } = props;
  const [drawerState, setDrawerState] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerState(true);
  };

  const handleCloseDrawer = () => {
    setDrawerState(false);
  };

  return (
    <Box sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "row-reverse", flexGrow: 1, }}>
      <IconButton size="large" aria-label="navigation" aria-haspopup="true" onClick={handleOpenDrawer} color="inherit">
        <MenuIcon />
      </IconButton>
      <Drawer variant="temporary" anchor="top" open={drawerState} onClose={handleCloseDrawer}>
        <List sx={{ display: { xs: "block", sm: "none" } }}>
          {pages.map((page) => (
            <Link key={page} to={page} smooth={true} offset={-48}>
              <ListItem button onClick={handleCloseDrawer}>
                <ListItemText primary={page} primaryTypographyProps={{ align: "center" }} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
