import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { ADD_USER, ADD_USER_LIKE, CHOICE_USER, DELETE_USER, DEL_FLASH_USER, EDIT_POST, EDIT_USER, GET_POST, GET_USERS } from "./ActionTypes";


export const getUser = () => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données
    // voir dans doc axios
    return axios.get("http://localhost:3003/api/users")
      .then((res) => {
        // renvoi les data du type GET_USER pour notre exemple avec les data dans la reponse avec payload
        //dispatch veut dire va dans les reducers via index.js de reducers 
        // console.log("data.users getUser Action ",res.data.users)
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
  // console.log("addUserLike action form ",data)
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios({
      method: "put",
      url: `http://localhost:3003/api//users/likes/${data.id}`,
      data: { ...data }
    })
      .then((res) => {
        // console.log("addUserLike ",res.data)
        dispatch({
          type: ADD_USER_LIKE,
          payload: res.data.users
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
        // console.log("Res message addUser ", res.data);
        dispatch({
          type: ADD_USER,
          payload: res.data,
        });
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
        // console.log("Res message editUser ", res.data.message);
        // console.log("Res type editUser ", res.data.type);

        if (res.data.type === "success") {
          // console.log("success")
          // console.log("userEdit Action res.data.posts ", res.data.posts)
          // console.log("userEdit Action res.data.users", res.data)
          // console.log("userEdit Action res.data.usersId[0] ", res.data.usersId[0])
          dispatch({
            type: EDIT_USER,
            payload: res.data,
          })
          dispatch({
            type: EDIT_POST,
            payload: res.data.posts,
          });
          dispatch({
            type: CHOICE_USER,
            payload: res.data.usersId[0],
          });
        }
        else {
          dispatch({
            type: EDIT_USER,
            payload: res.data,
          })
        }
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};
export const deleteUser = (userId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3003/api/users/${userId}`,
    })
      .then((res) => {
        // console.log('res delete user', res.data)
        dispatch({
          type: DELETE_USER,
          payload: res.data,
        });
        dispatch({
          type: GET_POST,
          payload: res.data.posts,
        });
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
export const deleteFlashsUser = () => {
  // console.log("choiceUser", data)
  return (dispatch) => {
    dispatch({
      type: DEL_FLASH_USER,
      payload: "",
    });
  }
};

