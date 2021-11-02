import React from 'react';

const Card = (props) => {

    //1°) les constantes:
    //on appelle sa la destructuration
    const {country, index } = props
    // equivaut à simplement:
    // const country = props.country
    //console.log(country)

    //1°) les fonctions
    const numberFormat =  (x) => {
        // ici tout les 3 caracteres on met un espace
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
            <li className="card">
                <div className="flag" key={index}>{country.flag} </div>
                {/* si c'est une image faire comme-ci */}
               {/* <img key={index} src={country.flag} alt="" /> */}
               <div className="data-container" >
                <ul>
                <li key={index}> {country.name.common}</li>
                <li key={index}> {country.capital}</li>
                <li key={index}> Population: {numberFormat(country.population)}</li>
                <li key={index}> {country.region}</li>
                </ul>


               </div>
            </li> 

    );
};


export default Card;


