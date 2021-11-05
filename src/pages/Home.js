import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const home = () => {
  return (
    <Container maxWidth="xl">
      <h1>Home</h1>

      <Card>
      <CardMedia
        component="img"
        height="140"
        image="http://ageheureux.a.g.pic.centerblog.net/clipart_meteo_temps_014.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </Container>
  );
};

export default home;
