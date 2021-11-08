import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";



const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/a-propos" exact element={<About />} />
        <Route path="/favoris" exact element={<Favoris />} />
        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>    
  );
};

export default App;
