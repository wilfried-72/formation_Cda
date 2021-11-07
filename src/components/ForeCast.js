import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ForeCast = () => {

  return (
    <Card  sx={{alignContent: 'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 , justifyContent: 'center', alignItems: 'center',alignContent: 'center' }}
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
          <Typography variant="subtitle1" color="text.secondary" component="div">
           dsd
          </Typography>
        </CardContent>
      </Box>

    </Card>

  )
}

export default ForeCast;


