import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ForeCast = (propsDaily) => {
  const { dateFormatMeteo } = require("../util/index");
  //console.log(propsDaily.daily.dt);

  return (
    <Card
      sx={{
        alignContent: "center",
        borderRadius: "10px",
        borderColor: "white",
        mr: 1,
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 90, textAlign:"justify"  }}
        // image={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        image={`../images/iconMeteo/${propsDaily.daily.weather[0].icon}.svg`}
        alt={`${propsDaily.daily.weather[0].icon}`}
      />

      <CardContent >
        <Typography  variant="h6"  sx={{color:"white",mb:2 }}>
          {propsDaily.daily.weather[0].description}
        </Typography>

        <Typography sx={{ color:"white", mb:1 }}>
          {dateFormatMeteo(propsDaily.daily.dt)}
        </Typography>

        <Typography variant="p" color="white">
          Humidité: {propsDaily.daily.humidity} %
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ForeCast;
