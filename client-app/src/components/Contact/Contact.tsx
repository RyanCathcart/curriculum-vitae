import { Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <Container className="Contact" maxWidth="lg" sx={{ paddingTop: 8, paddingBottom: 6 }}>
      <Typography variant="h2" color="primary" align="center" sx={{ paddingBottom: 8, fontWeight: "bold" }}>
        CONTACT
      </Typography>
      <ContactForm  />
    </Container>
  );
}
