import React from "react";
// Material UI
import { Container } from "@material-ui/core";

class Contact extends React.Component {
  render() {
    return (
      <Container fixed>
        <iframe style={{ width: "100%", height:"82em", alignContent:"center", marginTop:"1rem", border:"none" }} src="https://us10.list-manage.com/contact-form?u=a14fe5dd37e71371bbf84a953&form_id=d783aae4f152e34bdd1b5eb0c226c150" title="Contact Us Form"></iframe>
      </Container>
    );
  }
}

export default Contact;
