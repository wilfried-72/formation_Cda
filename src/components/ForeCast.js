import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ForeCast = (daily) => {
  const {dateFormatMeteo } = require("../util/index");
  console.log(daily.daily.dt);

  return (
    <Card sx={{ alignContent: "center", borderColor: 'primary.main', mr:1 }} >
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        // image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        image={`../images/iconMeteo/${daily.daily.weather[0].icon}.svg`}
        alt={`${daily.daily.weather[0].icon}`}
      />
  
        <CardContent>

        <Typography component="p" >
            {dateFormatMeteo(daily.daily.dt)}
          </Typography>

          <Typography component="div">
            {daily.daily.weather[0].description}
          </Typography>


          <Typography
            variant="p"
            color="text.secondary"
            component="div"
          >
            Humidité: {daily.daily.humidity} %
          </Typography>
        </CardContent>

    </Card>
  );
};

export default ForeCast;
