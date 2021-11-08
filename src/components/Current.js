// React
import * as React from "react";

//Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Redux
import { useSelector } from "react-redux";
import { style } from "@mui/system";

// store

// Component
const Current = () => {
  // on recupere les datas dans le store dont les "routes" sont défenies dans index.js du dossier store  puis reducer puis action
  const data = useSelector((state) => state.meteo.data);

  return (
    <div>
      {/* C'est une condition !!
        - https://reactjs.org/docs/conditional-rendering.html
    */}
      {data.weather && (
        <Card sx={"background:none"}>
          <CardMedia
            component="img"
            sx={{ width: 100, alignItems: "center", borderRight: "black  " }}
            image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Live from space album cover"
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h4">
              {data.weather[0].description}
            </Typography>

            <Typography variant="h5" color="text.secondary" component="div">
              {Math.round(data.main.temp)}°C Ress:
              {Math.round(data.main.feels_like)}
            </Typography>

            <Typography mt={2} component="p" color="text.secondary">
              T min: {data.main.temp_min} °C
            </Typography>

            <Typography component="p" color="text.secondary">
              T max: {data.main.temp_max} °C
            </Typography>

            <Typography mt={2} component="p" color="text.secondary">
              Humidité: {Math.round(data.main.humidity)} %
            </Typography>

            <Typography component="p" color="text.secondary">
              Pression: {data.main.pressure} pa
            </Typography>

            <Typography mt={2} component="p" color="text.secondary">
              Vent: {Math.round(data.wind.speed * 3.6)} km/h
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Current;