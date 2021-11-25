import axios from "axios";

//En debut de fichier: table des matieres de toutes nos actions pour les reducer
export const GET_POST = "GET_POST";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios
      .get("http://localhost:3003/api/posts")
      .then((res) => {
        // renvoi les data du type GET_POSTS pour notre exemple avec les data dans la reponse avec payload
        //dispatch veut dire va dans les reducers via index.js de reducers
        dispatch({
          type: GET_POST,
          payload: res.data.posts,
        });
        // console.log("Action " ,res.data.posts)
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};

export const addPosts = (data) => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios
      .post("http://localhost:3003/api/posts", data)
      .then((res) => {
        // console.log("Res Add Post ", res.data);

        dispatch({
          type: ADD_POST,
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

export const editPosts = (data) => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios({
      method: "put",
      url: `http://localhost:3003/api/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({
          type: EDIT_POST,
          payload: { ...data.posts },
        });
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    // console.log("postId Delete", postId);
    return axios({
      method: "delete",
      url: `http://localhost:3003/api/posts/${postId}`,
    })
      .then((res) => {
        dispatch({
          type: DELETE_POST,
          payload: { postId },
        });

        // Si back utilisé pour rafraichir les datas apres un del one
        // ************************************
        // dispatch({
        //     type: GET_POST,
        //     payload: res.data.dataDel,
        //   });
        // ************************************

        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};

export const addLike = (data) => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios({
      method: "put",
      url: `http://localhost:3003/api/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        dispatch({
          type: ADD_LIKE,
          payload: { ...data.posts },
        });
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};
