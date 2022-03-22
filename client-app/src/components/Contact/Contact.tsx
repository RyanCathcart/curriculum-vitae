import { Container, Typography } from "@mui/material";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container className="Contact" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" color="primary" align="center" sx={{ paddingBottom: 8, fontWeight: "bold" }}>
        CONTACT
      </Typography>
      <ContactForm />
    </Container>
  );
}
