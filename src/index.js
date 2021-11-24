import "./assets/scss/index.scss";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import App from './App'

import { store } from "./store";

import reportWebVitals from './tests/reportWebVitals';

// Actions (*)
import { getNews } from './store/actions/ArticleActions'
import { getCountries } from "./store/actions/CountriesActions";

store.dispatch(getNews())
store.dispatch(getCountries())

render(
  <Provider store={ store }>
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
