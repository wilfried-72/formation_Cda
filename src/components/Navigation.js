import React from 'react';

//importation pour navigation
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Acceuil
            </NavLink>
            <NavLink exact to="/news" activeClassName="nav-active">
                News
            </NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active">
                A propos
            </NavLink>
        </div>
    );
};

export default Navigation;