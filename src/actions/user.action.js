import axios from "axios";

//En debut de fichier: table des matieres de toutes nos actions pour les reducer
export const GET_USERS = "GET_USERS"

export const getUSERS = () => {
    return (dispatch) => {
        // ici on recupere les data dans la bases de données
        // voir dans doc axios
        return axios.get("http://localhost:3003/users")
            .then((res) => {
                // renvoi les data du type GET_USER pour notre exemple avec les data dans la reponse avec payload
                //dispatch veut dire va dans les reducers via index.js de reducers 
                dispatch({
                    type: GET_USERS,
                    payload: res.data,
                })
                // si ne fonctionne pas alors console err
            })
            .catch((err) => console.log(err))
    }

}