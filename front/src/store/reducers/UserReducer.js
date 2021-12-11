import * as Actions from "../actions/ActionTypes";

const initialState = {
  users: [],
  flashs: "",
  choiceUser: []
};

//se comporte comme un switch avec action
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    // et par défaut la variable state qui est vide via initialSate
    case Actions.GET_USERS:
      return { ...state, users: action.payload };
    case Actions.ADD_USER_LIKE:
      // console.log("action.payload", action.payload )
      return { ...state, users: action.payload };
    case Actions.ADD_USER:
      // ... veut dire qu'on recupère tous le state
      // console.log("message reducer")
      return { ...state, users: action.payload.data, flashs: action.payload.error};
    case Actions.EDIT_USER:
      // console.log('Je suis dans le Edit User', action.payload)
      return { ...state, users: action.payload.users, flashs: action.payload.error }
    case Actions.CHOICE_USER:
      // console.log('Je suis dans le CHOICE_USER', action.payload)
      return {
        ...state,
        choiceUser: action.payload
      };

    default:
      return state;
  }
}
