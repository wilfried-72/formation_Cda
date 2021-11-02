import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
    {/* ici on part du dossier public */}
    <img src="./img/logo.png" alt="logo" />     
    <h3>React mon premier tuto</h3>   
        </div>
    );
};

export default Logo;