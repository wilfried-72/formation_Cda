import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/scss/index.scss";


//redux 
import { Provider } from "react-redux";
import { store } from "./store";

// import reportWebVitals from '../test/reportWebVitals';

// Actions (*)
import { getPosts } from "./store/actions/PostAction";
import {getUser} from "./store/actions/UserAction";

// ici on envoi getPosts des que le store est monté
store.dispatch(getPosts())
store.dispatch(getUser())


ReactDOM.render(
// implementation du store avec provider qui englobe toute l'application
<Provider store={store} >
<App />
</Provider>, 
document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();