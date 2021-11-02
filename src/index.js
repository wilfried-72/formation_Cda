import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/index.scss";

//redux 
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { getPosts } from "./actions/post.action";
import { getUser} from "./actions/user.action";

const store = createStore(
    rootReducer,
    // Seulement à mettre en mode Dev et à enlever pour le build
    // cela permet de voir les store avec l'extention redux DevTools
    composeWithDevTools(applyMiddleware(thunk))
    // Fin mode dev
)

// ici on envoi getPosts des que le store est monté
store.dispatch(getPosts())
store.dispatch(getUser())


ReactDOM.render(
// implementation du store avec provider qui englobe toute l'application
<Provider store={store} >
<App />
</Provider>, 
document.getElementById("root"));
