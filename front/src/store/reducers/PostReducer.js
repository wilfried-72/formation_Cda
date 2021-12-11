import * as Actions from "../actions/ActionTypes";

const initialState = {
  posts: [],
  flashs: ""
};

//se comporte comme un switch avec action
export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    // ici la les data du json
    // et par défaut la variable state qui est vide via initialSate si aucun case n'est trouvé
    case Actions.GET_POST:
      // console.log('Je suis dans le get post', state)
      return { ...state, posts: action.payload };
    case Actions.ADD_POST:
      return { ...state, posts: action.payload.posts, flashs: action.payload.message };
    case Actions.EDIT_POST:
      // console.log('Je suis dans le edit post', action.payload)
      return { ...state, posts: action.payload };
    case Actions.DELETE_POST:
      return { ...state, posts: action.payload.posts, flashs: action.payload.message };
    case Actions.ADD_LIKE:
      // console.log("Actions.ADD_LIKE")
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
