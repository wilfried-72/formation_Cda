// mis en commentaire car pas use dans tuto
// import component home

// import Home from "./page/Home";
// import logo from './logo.svg';
// import './App.css';

//Code installé par defaut

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//ancien code perso pour afficher texte de home:

// function App() {
//   return (
//     ancien code
//     <div className="App">
//     <h1>Mon premier tuto React </h1>
//     ci dessous pour afficher component Home pour ex*
//     <Home/>   
//     </div>
//   );
// }
// export default App;

import React from 'react';

// importation pour faire la navigation de route avec react-router-dom
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/About';
import Home from "./pages/Home";
import News from './pages/News';
import Page404 from "./pages/Page404";


const App = () => {

  return (
  // Router React
  <BrowserRouter>
  <Switch>
    {/* exact signifie seulement le / */}
    <Route path="/" exact component={Home} />
    <Route path="/news" exact component={News} />
    <Route path="/a-propos" exact component={About}/>
    {/* A la fin si pas de route determiner alors page404 */}
    <Route component={Page404} /> 
  </Switch>
  </BrowserRouter>
  );
};

export default App;
