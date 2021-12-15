import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import NotFound from './pages/NotFound';
import About from './pages/About';
import Articles from './pages/Articles';
import CreateUser from './pages/CreateUser';

const App = () => {

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Articles />} />
          <Route path="/NewUser" exact element={<CreateUser />} />
          <Route path="/a-propos" exact element={<About />} />
          <Route element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
