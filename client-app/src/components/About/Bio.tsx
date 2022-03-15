import "../../styles/App.css";
import portrait from "../../assets/portrait.jpg";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function About() {
  return (
    <Card variant="outlined">
      <CardContent>
        <CardMedia component="img" image={portrait} alt="portrait" sx={{ paddingBottom: 2, borderRadius: "50%" }} />
        <Typography variant="h4" align="center" gutterBottom>
          Profile
        </Typography>
      </CardContent>
    </Card>
  );
}
