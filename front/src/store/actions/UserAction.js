import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { ADD_USER, ADD_USER_LIKE, CHOICE_USER, EDIT_USER, GET_USERS } from "./ActionTypes";


export const getUser = () => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données
    // voir dans doc axios
    return axios.get("http://localhost:3003/api/users")
      .then((res) => {
        // renvoi les data du type GET_USER pour notre exemple avec les data dans la reponse avec payload
        //dispatch veut dire va dans les reducers via index.js de reducers 
        dispatch({
          type: GET_USERS,
          payload: res.data.users,
        })
        // console.log("Action User " ,res.data.users)
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err))
  }
}
export const addUserLike = (data) => {
  // console.log("user action id ",data.id)
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios({
      method: "put",
      url: `http://localhost:3003/api/users/${data.id}`,
      data: { ...data }
    })
      .then((res) => {
        // console.log("addUserLike ",res.data.userEdit)
        dispatch({
          type: ADD_USER_LIKE,
          payload: res.data.userEdit
        })
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err))
  }

}
export const addUser = (data) => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios
      .post("http://localhost:3003/api/users", data)
      .then((res) => {
        //    console.log("Res Add User ", res.data);
        console.log("Res message ", res.data.message);
        dispatch({
          type: ADD_USER,
          payload: res.data.data,
        });

        // Si back utilisé pour rafraichir les datas apres un del one
        // ************************************
        // dispatch({
        //   type: GET_POST,
        //   payload: res.data.dataGet,
        // });
        // ************************************
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};
export const editUsers = (data) => {
  // console.log("Edit user", data)
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios({
      method: "put",
      url: `http://localhost:3003/api/users/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        // console.log("userEdit " ,res.data.userEdit[0])
        dispatch({
          type: EDIT_USER,
          payload: res.data.userEdit[0],
        });

        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};


export const choiceUser = (data) => {
  // console.log("choiceUser", data)
  return (dispatch) => {
      dispatch({
        type: CHOICE_USER,
        payload: data,
      });
    }
};



