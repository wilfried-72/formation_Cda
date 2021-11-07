// React
import * as React from 'react';

//Material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Redux
import { useSelector } from "react-redux";

// store
import { store } from "../store";
import { getMeteo } from '../store/actions/MeteoActions'


// Component 
const Current = () => {

    // on recupere les datas dans le store dont les "routes" sont défenies dans index.js du dossier store  puis reducer puis action
   const data = useSelector(state => state.meteo.data);
  const select = ["Paris", "Dubai", "Londres", "Le Mans"];

  function handleChangeSelect(e) {
    // console.log("Selected!!", e.target.value);
    // ici on demande un getMeteo en fonction de la ville du select puis on execute l'api et les datas renvoyées son mmises dans le store
    if (e.target.value.length > 0) store.dispatch(getMeteo(e.target.value));
  }

  return (
    <div>
      {/* On recupère l'event du select pas de l'option */}
      <select
        id="country"
        name="country"
        onChange={(e) => handleChangeSelect(e)}
      >
        {select.map((select) => {
          return (
            <option value={select} key={select}>
              {select}
            </option>
          );
        })}
      </select>

      {/* C'est une condition !!
        - https://reactjs.org/docs/conditional-rendering.html
    */}
      {data.weather && (
        <div className="CountryIndice" id={data.weather[0].main}>
          <li className="Pays">{data.name}</li>
          <li>{Math.round(data.main.temp)}Â°C</li>
          <li className="weatherDescr" key={data.weather[0].id}>
            {data.weather[0].description}
          </li>
        </div>
      )}


      {data.weather && (
        <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <CardMedia
            component="img"
            sx={{ width: 151, alignItems: 'center' }}
            image="http://ageheureux.a.g.pic.centerblog.net/clipart_meteo_temps_014.png"
            alt="Live from space album cover"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Mac Miller
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                dsdc
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </div>


  )
}

export default Current;


