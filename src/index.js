import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/scss/index.scss";
// import './assets/css/index.css';
import App from './App';

//imortation du store
import { store } from "./store";
// ici l'index.js dans ce dossier est pris par defaut
// REM: si pas de fichier index, il faut preciser le fichier que l'on importe

import reportWebVitals from './tests/reportWebVitals';
import { Provider } from 'react-redux';

// Actions (*)
// import { getNews } from './store/actions/ArticleActions'

// recuperation des datas ci-dessous dans le store
// store.dispatch(getNews())

ReactDOM.render(
  // implementation du store avec provider qui englobe toute l'application
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
