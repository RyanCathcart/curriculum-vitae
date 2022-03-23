import { Box, Button, Container, TextField } from "@mui/material";
import emailjs from "@emailjs/browser";
import useForm, { Values } from "../../hooks/useForm";

export default function ContactForm() {
  const serviceID = "service_yqo5rw5";
  const templateID = "template_loaeo0l";
  const userID = "dFpCPYdaMXPW8Jcu7";

  

  const sendEmail = (e: any) => {
    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const validate = (fieldValues: Values) => {
    let temp: Values = {...errors};
    if ("from_name" in fieldValues) {
      temp.from_name = fieldValues.from_name ? "" : "This field is required";
    }
    if ("sender_email" in fieldValues) {
      temp.sender_email = (/.+@.+..+/).test(fieldValues.sender_email!) ? "" : "Email is not valid";
    }
    if ("message" in fieldValues) {
      temp.message = fieldValues.message ? "" : "This field is required";
    }
    setErrors({ ...temp });

    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === "");
    }
  };

  const { values, errors, setErrors, handleInputChange } = useForm(true, validate);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate(values)) {
      sendEmail(e);
    }
    e.target.reset();
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <TextField
          label="Name"
          value={values.from_name}
          name="from_name"
          margin="normal"
          required
          onChange={handleInputChange}
          {...(errors.from_name && { error: true, helperText: errors.from_name })}
        />
        <TextField
          label="Email"
          value={values.sender_email}
          name="sender_email"
          margin="normal"
          required
          onChange={handleInputChange}
          {...(errors.sender_email && { error: true, helperText: errors.sender_email })}
        />
        <TextField
          label="Message"
          value={values.message}
          name="message"
          margin="normal"
          required
          onChange={handleInputChange}
          {...(errors.message && { error: true, helperText: errors.message })}
          multiline={true}
          minRows={4}
        />
        <Button type="submit" variant="contained" color="secondary" sx={{ my: 1 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}
