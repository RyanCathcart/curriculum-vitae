import { Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <Container className="Contact" maxWidth="lg" sx={{ paddingTop: 8, paddingBottom: 6 }}>
      <Typography variant="h2" color="primary" align="center" sx={{ paddingBottom: 1, fontWeight: "bold" }}>
        CONTACT
      </Typography>
      <Typography variant="subtitle1" color="primary" align="center" sx={{ paddingBottom: 6 }}>
        Feel free to contact me by any of my social medias, or by email below:
      </Typography>
      <ContactForm  />
    </Container>
  );
}
