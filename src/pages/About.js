import { Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ pt: 6 }}>
        <h1>A propos</h1>
        <br />
        <p>Application Meteo faite avec React JS.</p>
        <p>Auteur: liwza </p>
      </Container>
    </div>
  );
};

export default About;
