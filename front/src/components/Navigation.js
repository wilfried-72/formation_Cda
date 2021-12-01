import React from "react";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default Navigation;