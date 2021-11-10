import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Current from "../components/Current";
import ForeCast from "../components/ForeCast";
import { store } from "../store";
import { getMeteoAll } from "../store/actions/MeteoActions";

const Home = () => {
  const dataCurrent = useSelector((state) => state.meteo.data);
  const dataAll = useSelector((state) => state.meteo.dataAll);
  console.log(dataAll.daily);

  useEffect(() => {
    if (dataCurrent.weather) {
      // console.log(dataCurrent.coord.lat, dataCurrent.coord.lon);
      store.dispatch(getMeteoAll(dataCurrent.coord.lat, dataCurrent.coord.lon));
    }
  }, [dataCurrent]);

  return (
    <div>
      {dataCurrent.weather && dataAll.daily && (
        // <Container className={"Bg_"+dataCurrent.weather[0].main+"N"} >
        //  {/* { dayOrNight } */}
        //   <Current />
        //   {/* < Main /> */}
        // </Container>

        <Container className={"Bg_" + dataCurrent.weather[0].main + "D"}>
          {/* { dayOrNight } */}
          <Current />

          <Box
            component="div"
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              // justifyContent: "space-around",
              overflow: "visible",
            }}
          >
            {dataAll.daily.map((daily, index) => (
              <ForeCast daily={daily} key={index} />
            ))}
          </Box>
        </Container>
      )}
    </div>
  );
};

export default Home;
