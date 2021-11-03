import { ADD_LIKE, ADD_POST, DELETE_POST, EDIT_POST, GET_POST } from "../actions/post.action";

const initialState = {};

//se comporte comme un switch avec action
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    // ici la les data du json
    // et par défaut la variable state qui est vide via initialSate si aucun case n'est trouvé
    case GET_POST:
      return action.payload;
    case ADD_POST:
      // ... veut dire qu'on recupère tous le state
      return [action.payload, ...state];
    case EDIT_POST:
      // ... veut dire qu'on recupère tous le state
      return state.map((post) => {
        //   ici on recherche l'objet par l'id du post
        if (post.id === action.payload.id) {
          //  si trouvé, on recupere tout les data du post et le contenu modifié
          return {
            ...post,
            content: action.payload.content,
          };
          //sinon on renvoi le post d'origine
        } else return post;
      });
    case DELETE_POST:
      //   ici on remap tout le post sauf celui avec lid à supprimer
      return state.filter((post) => post.id !== action.payload.postId)

    case ADD_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes,
          };
        } else return post;
      })
    default:
      return state;
  }
}
