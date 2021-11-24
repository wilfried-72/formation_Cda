import { ADD_USER_LIKE, GET_USERS } from "../actions/user.action"

const initialState = {}

//se comporte comme un switch avec action
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        //ici pour le cas GET_POSTS on retourne action.payload
        // ici la les data du json
        // et par défaut la variable state qui est vide via initialSate 
        case GET_USERS:
            return action.payload
        case ADD_USER_LIKE:
            return state.map((user) => {
                // console.log(user.id)
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        likes: action.payload.likes,
                    };
                } else return user;
            })
        default:
            return state
    }
}

