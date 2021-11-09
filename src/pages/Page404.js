import { Container } from "@mui/material";
import React from "react";

const Page404 = () => {
  return (
    <div className="Page404">
      <Container maxWidth="xl"  sx={{ color:"white",display: 'inline-flex', justifyContent: 'center' ,height: '89vh' }}>
        <h2>Erreur 404</h2>
      </Container>
    </div>
  );
};

export default Page404;
