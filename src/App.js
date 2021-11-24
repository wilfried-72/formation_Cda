import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import News from "./pages/News";
import Weather from "./pages/Weather";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/a-propos" exact component={About} />
        <Route path="/news" exact component={News} />
        <Route path="/weather" exact component={Weather} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

