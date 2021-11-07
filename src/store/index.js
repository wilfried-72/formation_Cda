
/*
 *  importation React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * immportation Reducers
 * ******** */
import { MeteoReducer } from "./reducers/MeteoReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  // favoris: FavorisReducer ,
  meteo: MeteoReducer,
});

/*
 * Store export
 * ************ */

// Seulement à mettre en mode Dev et à enlever pour le build
// cela permet de voir les store avec l'extention redux DevTools
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); 
// Fin mode dev


// export const store = createStore(rootReducer); // Prod
