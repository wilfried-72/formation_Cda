/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import du fichier types { ... }
 * ******************** */
import { ADD_FAVORIS_DATA, DELETE_FAVORIS_DATA, EDIT_FAVORIS_DATA, GET_FAVORIS_DATA } from "./ActionTypes";

/*
 * Actions 
 * ******* */

// Get Favoris
export const getFavorites = () => {
  console.log('getFavorites')
  return (dispatch) => {
    return axios
      .get("http://localhost:3003/favorites")
      .then((res) => {
        console.log("getFavorites :", res);
        dispatch({ type: GET_FAVORIS_DATA, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Add Favoris
export const addFavorites  = (data) => {
  console.log('addFavorites ', data)
  return (dispatch) => {
    return axios
      .post("http://localhost:3003/favorites", data)
      .then((res) => {
        console.log("postFavorites ", res.data);
        dispatch({ type: ADD_FAVORIS_DATA, payload: res.data.message });
      })
      .catch((err) => console.log(err));
  };
};

export const editFavorites= (data) => {
  return (dispatch) => {
      // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
      // voir dans doc axios
      return axios({
      method: "put",
      url: `http://localhost:3003/favorites/${data.id}`,
      data: {...data}
      })
      .then((res) => {
              dispatch({
                  type: EDIT_FAVORIS_DATA,
                  payload: {...data}
              })
              // si ne fonctionne pas alors console err
          })
          .catch((err) => console.log(err))
  }

}

export const deleteFavorites = (postId) => {
  return (dispatch) => {
      // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
      // voir dans doc axios
      return axios({
      method: "delete",
      url: `http://localhost:3003/Favorites/${postId}`,
      })
      .then((res) => {
              dispatch({
                  type: DELETE_FAVORIS_DATA,
                  payload: {postId}
              })
              // si ne fonctionne pas alors console err
          })
          .catch((err) => console.log(err))
  }

}
