import * as Actions from "../actions/ActionTypes";

const initialState = {
  users: [],
  typeFlashs: "",
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
      // console.log("Add user Reducer", action.payload)
      return {
        ...state,
        users: action.payload.data,
        flashs: action.payload.message,
        typeFlashs: action.payload.type
      };
    case Actions.EDIT_USER:
      // console.log('Je suis dans le Edit User', action.payload)
      return {
        ...state,
        users: action.payload.users,
        flashs: action.payload.message,
        typeFlashs: action.payload.type
      };
    case Actions.DELETE_USER:
      // console.log('Je suis dans le DELETE_USER', action.payload)
      return {
        ...state,
        users: action.payload.users,
        flashs: action.payload.message,
        typeFlashs: action.payload.type
      };
    case Actions.CHOICE_USER:
      // console.log('Je suis dans le CHOICE_USER', action.payload)
      return {
        ...state,
        choiceUser: action.payload
      };
    case Actions.DEL_FLASH_USER:
      // console.log('Je suis dans le DEL_FLASH_USER", action.payload)
      return {
        ...state,
        flashs: action.payload
      };
    default:
      return state;
  }
}


