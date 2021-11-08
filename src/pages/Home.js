import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Current from "../components/Current";
import Main from "../components/Main";

const Home = () => {
  const data = useSelector((state) => state.meteo.data);

  return (
    <div>
      {data.weather && (
        <Container class={"Bg_"+data.weather[0].main}>
          <Current />
          {/* < Main /> */}
        </Container>
      )}
    </div>
  );
};

export default Home;
