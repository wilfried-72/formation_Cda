import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import { store } from "./store";
import { geCountryAll } from "./store/actions/MeteoActions";

const App = () => {

  useEffect(() => {
    store.dispatch(geCountryAll())
  }, []);


  return (
    <BrowserRouter basename = "/">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/favoris" exact element={<Favoris />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
