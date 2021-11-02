import React from 'react';
import ReactDOM from 'react-dom';
// mis en commentaire car pas use dans tuto
// import './index.css';
import App from './App';

//importation du style avec sass
import "./styles/index.scss"

// mis en commentaire car pas use dans tuto
// import reportWebVitals from './reportWebVitals';

//rend l'application au niveau de l'id root dans fichier index.html
ReactDOM.render(
  <React.StrictMode>
  {/* en dessou on appelle le composant app.js */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// mis en commentaire car pas use dans tuto
// reportWebVitals();
