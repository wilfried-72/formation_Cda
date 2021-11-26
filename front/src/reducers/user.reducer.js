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
                // console.log("user.id ",user._id)
                // console.log("action ",action.payload[0]._id)

                if (user.id === action.payload[0]._id) {
                    return {
                        ...user,
                        likes: action.payload[0].likes,
                    };
                } else return user;
            })
        default:
            return state
    }
}

