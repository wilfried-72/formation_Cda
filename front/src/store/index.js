
/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import PostReducer from "./reducers/PostReducer";
import UserReducer from "./reducers/UserReducer";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
    postReducer: PostReducer,
    userReducer: UserReducer,
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod