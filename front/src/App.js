import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import About from './pages/About';
import Articles from './pages/Articles';
import CreateUser from './pages/CreateUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Articles />} />
          <Route path="/NewUser" exact element={<CreateUser />} />
          <Route path="/a-propos" exact element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
