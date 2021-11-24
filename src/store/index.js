
/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { ArticleReducer } from "./reducers/ArticleReducers";
import { CountriesReducer } from "./reducers/CountriesReducers";
import { WeatherReducer } from "./reducers/WeatherReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  article: ArticleReducer,
  countries: CountriesReducer,
  weather: WeatherReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
