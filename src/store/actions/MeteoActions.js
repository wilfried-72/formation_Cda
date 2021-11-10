/*
 * Import - Module axiopou requete
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
// import variables stockée dans un fichier qui centralise toutes les variables du projet (ActionTypes)
//  dont on a besoin dans ce fichier action)
import { GET_APIMETEO_ALL_DATA, GET_APIMETEO_CURRENT_DATA } from "./ActionTypes";


/*
 * Actions
 * ******* */

// Get Meteo Current
export const getMeteoCurrent = (country) => {
  return (dispatch) => {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: country, units: "metric", lang: "fr",
         // ce genre de clé est à mettre dans un .env
         appid: process.env.REACT_APP_CLE_API_METEO,
        },

      }).then((res) => {
        // console.log("DATA_CURRENT", country, res.data);
        dispatch({ type: GET_APIMETEO_CURRENT_DATA, payload: res.data });
      }).catch((err) => console.log(err));
  };
};

// Get Meteo All APi with long and lat 
export const getMeteoAll = (lat, long) => {
  return (dispatch) => {
      return axios.get("https://api.openweathermap.org/data/2.5/onecall?", {
        params: {
          lat: lat, lon: long, units: "metric", lang: "fr",
         // ce genre de clé est à mettre dans un .env
         appid: process.env.REACT_APP_CLE_API_METEO,
        },

      }).then((res) => {
        // console.log("DATA_ALL", lat, long, res.data);
        dispatch({ type: GET_APIMETEO_ALL_DATA, payload: res.data });

      }).catch((err) => console.log(err));
  };
};

