/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  favoritesData: [],
  favorites: {
    nom: "",
    date: "",
    IsSelected: "",
    id: 1,
  },
};

/*
 * Reducers
 * ******** */
export function FavorisReducers(state = initialState, action) {
  switch (action.type) {
    //ici pour le cas GET_POSTS on retourne action.payload
    case Actions.GET_FAVORIS_DATA:
      return { ...state, favoritesData: action.payload };
    case Actions.ADD_FAVORIS_DATA:
      return { ...state, flash: action.payload };
    case Actions.EDIT_FAVORIS_DATA:
      // ... veut dire qu'on recupère tous le state
      return state.map((put) => {
        //   ici on recherche l'objet par l'id du post
        if (put.id === action.payload.id) {
          //  si trouvé, on recupere tout les data du post et le contenu modifié
          return {
            ...put,
            IsSelected: action.payload.IsSelected,
          };
          //sinon on renvoi le post d'origine
        } else return put;
      });
    case Actions.DELETE_FAVORIS_DATA:
      //   ici on remap tout le post sauf celui avec lid à supprimer
      return state.filter((del) => del.id !== action.payload.delId);
    default:
      return state;
  }
}

/*
 * Getters
 * ******* */
