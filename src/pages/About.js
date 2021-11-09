import { Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        <h2>A propos</h2>
        <p>Application Meteo faite avec React JS. <br/>  Auteur: liwza </p>
      </Container>
    </div>
  );
};

export default About;
