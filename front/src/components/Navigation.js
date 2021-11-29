import React from "react";
import { NavLink } from "react-router-dom";
import ChoiceUser from "./ChoiceUser";
import FourTop from "./FourTop";


const Navigation = () => {

  return (
    <div className="navigation">
      <div className="navTitle">
        <NavLink to="/">
          Article
        </NavLink>
        <NavLink to="/a-propos">
          À propos
        </NavLink>
        <NavLink to="/NewUser">
      Créer utilisateur
        </NavLink>
      </div>
      <div className="underNav">
        <ChoiceUser />
        <FourTop />
      </div>
    </div>
  );
};

export default Navigation;