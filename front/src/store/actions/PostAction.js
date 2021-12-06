import axios from "axios";
import {ADD_LIKE, ADD_POST, DELETE_POST, EDIT_POST, GET_POST } from "./ActionTypes";

export const getPosts = () => {
  return (dispatch) => {
    // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
    // voir dans doc axios
    return axios
      .get("http://localhost:3003/api/posts")
      .then((res) => {
        //  console.log("Action Get Post " ,res)
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
        // console.log("Res Add Post ", res.data.posts);
        dispatch({
          type: ADD_POST,
          payload: res.data,
        });
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
          payload: res.data.posts ,
        });
        // console.log("data.posts Edit " ,res.data.dataEdit)
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
        console.log('res delete post', res.data)
        dispatch({
            type: DELETE_POST,
            payload: res.data,
          });
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
      url: `http://localhost:3003/api/posts/likes/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        // console.log(res.data)
        dispatch({
          type: ADD_LIKE,
          payload: res.data.posts,
        });
        // si ne fonctionne pas alors console err
      })
      .catch((err) => console.log(err));
  };
};
