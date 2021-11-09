import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Current from "../components/Current";
// import Main from "../components/Main";

const Home = () => {
  const dataCurrent = useSelector((state) => state.meteo.data);

  return (
    <div>
      {dataCurrent.weather && (
        // <Container className={"Bg_"+dataCurrent.weather[0].main+"N"} >
        //  {/* { dayOrNight } */}
        //   <Current />
        //   {/* < Main /> */}
        // </Container>

        <Container className={"Bg_" + dataCurrent.weather[0].main + "D"}>
          {/* { dayOrNight } */}
          <Current />
          {/* < Main /> */}
        </Container>
      )}
    </div>
  );
};

export default Home;
