import axios from "axios";

//En debut de fichier: table des matieres de toutes nos actions pour les reducer
export const GET_POSTS = "GET_POSTS"
export const ADD_POSTS = "ADD_POSTS"

export const getPosts = () => {
    return (dispatch) => {
        // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
        // voir dans doc axios
        return axios.get("http://localhost:3003/posts?_sort=idorder=desc")
            .then((res) => {
                // renvoi les data du type GET_POSTS pour notre exemple avec les data dans la reponse avec payload
                //dispatch veut dire va dans les reducers via index.js de reducers 
                dispatch({
                    type: GET_POSTS,
                    payload: res.data,
                })
                // si ne fonctionne pas alors console err
            })
            .catch((err) => console.log(err))
    }

}

export const addPosts = (data) => {
    return (dispatch) => {
        // ici on recupere les data dans la bases de données et on le tri par ordre decroissant via l'id
        // voir dans doc axios
        return axios.post("http://localhost:3003/posts", data)
            .then((res) => {
                dispatch({
                    type: ADD_POSTS,
                    payload: data,
                })
                // si ne fonctionne pas alors console err
            })
            .catch((err) => console.log(err))
    }

}