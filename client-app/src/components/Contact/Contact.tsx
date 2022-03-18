import { Button, Container, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container className="Contact" maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" color="primary" align="center" sx={{ paddingBottom: 8, fontWeight: "bold" }}>
        CONTACT
      </Typography>
      <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
        <TextField label="Name" margin="normal" />
        <TextField label="Email" margin="normal" />
        <TextField label="Message" margin="normal" multiline={true} minRows={4} />
        <Button variant="contained" color="secondary">Submit</Button>
      </Container>
    </Container>
  );
}
