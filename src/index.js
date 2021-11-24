import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import * as serviceWorker from './serviceWorker';
// import "./styles/index.scss";
import { store } from "./store";
import { StyledEngineProvider } from "@mui/material/styles";
// import 'bootstrap/dist/css/bootstrap.min.css';

import { getWeather, getWeathersWeek } from "./store/actions/WeatherActions";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/index";
import "./assets/scss/index.scss";

// Cats
// import { getImages } from "./store/actions/ImagesActions";

store.dispatch(getWeather("Paris"));
store.dispatch(getWeathersWeek("Paris"));
// Cats
// store.dispatch(getImages());

const renderReactDom = () => {
ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}

serviceWorker.unregister();