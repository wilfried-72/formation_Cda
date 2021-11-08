/*
 * Import - Module axiopou requete
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
// import variables stockée dans un fichier qui centralise toutes les variables du projet (ActionTypes)
//  dont on a besoin dans ce fichier action)
import { GET_APIMETEO_DATA } from "./ActionTypes";


/*
 * Actions
 * ******* */

// Get Meteo
export const getMeteo = (country) => {
  return (dispatch) => {
    return axios.get("http://api.openweathermap.org/data/2.5/weather?", {
        params: {
          q: country, units: "metric", lang: "fr",
         // ce genre de clé est à mettre dans un .env
         appid: process.env.REACT_APP_CLE_API_METEO,
        },

      }).then((res) => {
        //console.log("DATA", country, res.data);
        dispatch({ type: GET_APIMETEO_DATA, payload: res.data });

      }).catch((err) => console.log(err));
  };
};
