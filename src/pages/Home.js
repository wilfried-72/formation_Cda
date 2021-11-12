import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Current from "../components/Current";
import ForeCast from "../components/ForeCast";
import Main from "../components/main";
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

          <Main dataCurrent={dataCurrent} />

          <Box
            component="div"
            sx={{
              display: "flex",
              backgroundColor: "rgba(76,163,221,1 )", borderRadius:"10px" , m:2,  border: "1px white"
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
