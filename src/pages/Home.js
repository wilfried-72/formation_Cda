import { Container} from "@mui/material";
import React from "react";
import Current from "../components/Current";
import Main from "../components/Main";


const Home = () => {
  return (
    <Container maxWidth="xl">
      <Current/>
      {/* < Main /> */}
    </Container>
    
  );
};

export default Home;
