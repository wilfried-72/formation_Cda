// Ancien code pour tester route d'une page
// non obligatoire car il est compris maintenant dans l'appli
// import React from "react";
// const Home =() => {
// return (
//     <div className="home">
//     <h2>Accueil</h2>
//     </div>
// );
// };
// export default Home;

// Pour faire un modele de component, taper rsc et tab

import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

// attention quand on importe des components
// de bien mettre l'espace apres
// Example <Navigation />
const Home = () => {
    return (

        // pour faire une div avec une class faire ."le nom de la classe et entrer"
        <div className="home">
            <Navigation />
            <Logo />
            <h1>Acceuil</h1>
            <Countries />
        </div>
    );
};

export default Home;
