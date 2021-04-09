import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";
import { Container } from "@material-ui/core";
import Navbar from "../components/Navbar.js";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Container fixed>
          <form style={{ width: "50%" }}>
            <h1>Contact Form</h1>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" type="text" />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>

            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Message</InputLabel>
              <Input id="email" multiline rows={10} />
            </FormControl>

            <Button variant="contained" color="primary" size="medium">
              Send
            </Button>
          </form>
        </Container>
      </>
    );
  }
}

export default Contact;
