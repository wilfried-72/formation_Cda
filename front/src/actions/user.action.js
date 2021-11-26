import axios from "axios";

//En debut de fichier: table des matieres de toutes nos actions pour les reducer
export const GET_USERS = "GET_USERS"
export const ADD_USER_LIKE = "ADD_USER_LIKE"

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
            data: { ...data}
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
