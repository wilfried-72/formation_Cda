import {
    ADD_POSTS,
    GET_POSTS
} from "../actions/post.action";

const initialState = {}

//se comporte comme un switch avec action
export default function postReducer(state = initialState, action) {
    switch (action.type) {
        //ici pour le cas GET_POSTS on retourne action.payload
        // ici la les data du json
        // et par défaut la variable state qui est vide via initialSate si aucun case n'est trouvé 
        case GET_POSTS:
            return action.payload
        case ADD_POSTS:
            // ... veut dire qu'on recupère tous le state
            return [action.payload, ...state]
        default:
            return state

    }

}