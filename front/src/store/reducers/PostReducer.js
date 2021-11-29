import * as Actions from "../actions/ActionTypes";

const initialState = {
  post: [],
  flash: ""
};

//se comporte comme un switch avec action
export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    // ici la les data du json
    // et par défaut la variable state qui est vide via initialSate si aucun case n'est trouvé
    case Actions.GET_POST:
      return {...state, post: action.payload};
    case Actions.ADD_POST:
      // ... veut dire qu'on recupère tous le state
      // 
      // WARN !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // 
      return {...state, post: action.payload };
    case Actions.EDIT_POST:
      // ... veut dire qu'on recupère tous le state
      // console.log("action.payload", action.payload[0]._id)
      return state.map((post) => {
        // console.log("post._id ", post._id )
        // console.log("action.payload._id ", action.payload._id )
        //   ici on recherche l'objet par l'id du post
        if (post._id === action.payload[0]._id) {
     
          //  si trouvé, on recupere tout les data du post et le contenu modifié
          return {
            ...post,
            content: action.payload[0].content,
          };
          //sinon on renvoi le post d'origine
        } else return post;
      });
    case Actions.DELETE_POST:
      // console.log("delpodt action")
      //   ici on remap tout le post sauf celui avec lid à supprimer
      return { ...state, postReducer: action.payload.post, flash: action.payload.message };
      // return state.filter((post) => post._id !== action.payload.postId );
    
    case Actions.ADD_LIKE:
      return state.map((post) => {
        if (post._id === action.payload._id) {
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
