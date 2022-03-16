import { Box, Typography } from "@mui/material";
import { customTheme } from "../styles/customTheme";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: `${customTheme.palette.primary.main}`, display: "flex", justifyContent: "center", paddingTop: 8, paddingBottom: 4 }}>
      <Typography variant="body1" color="hsl(0, 0%, 50%)" align="center">
        RYAN CATHCART&nbsp;
      </Typography>
      <Typography variant="body1" color={customTheme.palette.secondary.main} align="center">
        ©2022
      </Typography>
    </Box>
  );
}
