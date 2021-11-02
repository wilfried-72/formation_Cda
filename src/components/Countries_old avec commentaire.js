import React, { useEffect, useState } from 'react';

//import Axios pour fecth
import axios from "axios";
import Card from './Card';

// //Code pour comprendre les hook et state simple
// const Countries = () => {    
// // faire un hook pour stocker les states, on donne un nom et apres SetData (mettre en place la data)   
// // Data est la donnée et SetData est la facon de l'appeler
// // Pour voir ceci utiliser l'extention chrome React Developer Tools
// // Puis ouvrir inspecteur, choisir component et aller sur ce component countries et on voit le state, etc
// const [data, setData] = useState("hello wil");
// const sayGooodBye = () => {
//     setData("Good Bye")
// }
//     return (
//         <div>
//             {data}
//             <button onClick={sayGooodBye}>Dire au revoir</button>
//         </div>
//     );
// };
// export default Countries;


//Code avec une Api

const Countries = () => {
    // faire un hook pour stocker les states, on donne un nom et apres SetData (mettre en place la data)   
    // Data est la donnée et SetData est la facon de l'appeler
    // Pour voir ceci utiliser l'extention chrome React Developer Tools
    // Puis ouvrir inspecteur, choisir component et aller sur ce component countries et on voit le state, etc
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectRadio, setSelectRadio] = useState('');
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    //constante pour jouer une fois axios
    const [playOne, setPlayOne] = useState(true)

    // permet d'envoyer une seule fpois la requete fecth sous react
    useEffect(() => {

        if (playOne) {
            //recuperer Api avec module npm axios
            axios
                .get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag')
                .then((res) => {
                    //console.log(res)
                    //on recupere les data contenu dans la réponse de l'API
                    setData(res.data)
                    setPlayOne(false)
                })

        }
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i])
            const sortedArray = countryObj.sort((a, b) => {
                return b.population - a.population;
            });
            //console.log(sortedArray);
            sortedArray.length = rangeValue
            setSortedData(sortedArray)
        };

        sortedCountry();

    }, [data, rangeValue, playOne])
    // ce [] permet de faire un callbac de la fonction useEffect, si rien fais une seule fois
    // on peut mettre une variable ou plusieur variable pour que la fonction useEffect se declenche a chaque chgement de la ou d'une des varaible
    //console.log(data)

    // aide pour naviger dans un array en JS
    // for (let index = 0; index < data.length; index++) {
    //     console.log(data[index].name.common);
    // }

    return (
        <div className="countries">
            <div className="sort-container">
                {/* ici on fait une iput type range avec un mini de 1 et un maxiri de 250 et une value par défaut à 40 */}
                {/* Puis quand l'input chage, on recupere la value via (e) et on l'envoi sur setRangeValue */}
                <input type="range" min="1" max="250" value={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />

                <ul>
                    {radios.map((radio, index) => {
                        return (
                            <li key={index}>
                                <input type="radio" value={radio} id={radio}
                                    checked={radio === selectRadio}
                                    onChange={(e) => setSelectRadio(e.target.value)} />
                                <label htmlFor={radio}>{radio}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="cancel">
                {/* si selectRadio est à true alors on met le H5 */}
                {selectRadio && <h5 onClick={() => setSelectRadio("")}>Annuler recherche</h5>}
            </div>
            <ul className="countries-list">
                {/* Pour naviguer dans un tableau avec index avec un filtre sur continant à l'aide ddes boutons radio*/}
                {sortedData
                    .filter((country) => country.region.includes(selectRadio))
                    .map((country, index) => (
                        <Card country={country} key={index} />

                    ))
                }
            </ul>
        </div>

    );
};

export default Countries;




