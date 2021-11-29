import * as Actions from "../actions/ActionTypes";

const initialState = {};

//se comporte comme un switch avec action
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    // ici la les data du json
    // et par défaut la variable state qui est vide via initialSate
    case Actions.GET_USERS:
      return action.payload;
    case Actions.ADD_USER_LIKE:
      return state.map((user) => {
        // console.log("user.id ",user._id)
        // console.log("action ",action.payload[0]._id)

        if (user.id === action.payload[0]._id) {
          return {
            ...user,
            likes: action.payload[0].likes,
          };
        } else return user;
      });
    case Actions.ADD_USER:
      // ... veut dire qu'on recupère tous le state
      console.log("message reducer")
      return [action.payload, ...state];
    case Actions.EDIT_USER:
      // ... veut dire qu'on recupère tous le state
      // console.log("action.payload", action.payload[0]._id)
      return state.map((user) => {
        // console.log("user._id ", user._id )
        // console.log("action.payload._id ", action.payload._id )
        //   ici on recherche l'objet par l'id du post
        if (user._id === action.payload._id) {
          // console.log("user " + action.payload.pseudo + " find")
          // console.log("user pseudo" ,action.payload.pseudo)
          // console.log("user ages", action.payload.ages)
          //  si trouvé, on recupere tout les data du post et le contenu modifié
          return {
            ...user,
            pseudo: action.payload.pseudo,
            ages: action.payload.ages,
          };
          //sinon on renvoi le post d'origine
        } else return user;
      });
    default:
      return state;
  }
}
