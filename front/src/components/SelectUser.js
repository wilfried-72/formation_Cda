import React from 'react';
import { useSelector } from 'react-redux';
import { store } from '../store';
import { choiceUser } from '../store/actions/UserAction';

const SelectUser = () => {

    // on recupere les data de notre store 
    const users = useSelector((state) => state.userReducer.users);
    // console.log("state user ", users);

     // Fonction pour mapper le select en fonction du store users trié par ordre alphabétique sur pseudo
    const select = [];
    if (users.length > 0) {
        users.map((user) => select.push(user));
        select.sort(function (a, b) {
            return a.pseudo - b.pseudo;
        });
    }
    // console.log(select);

    // fonction qui recupere l'objet du user lors du choix du select
    function handleChangeUser(e) {
        // console.log("Selected!!", e.target.value);;

        if (e.target.value === "all") {
            const dataChoiceUserEmpty = ""
            store.dispatch(choiceUser(dataChoiceUserEmpty));
        }
        else {
            const dataChoiceUser = users.find((userFind) => userFind.pseudo === e.target.value);
            store.dispatch(choiceUser(dataChoiceUser));
        }
        
    }

    return (
        <div>
            <div className="header">
                <div className="userChoice">
                    <div>
                        <h3>Choisir user:</h3>
                        <select onChange={(e) => handleChangeUser(e)}>
                            <option value="all">All</option>
                            {select.map((select) => {
                                return (
                                    <option value={select.pseudo} key={select._id}>
                                        {select.pseudo}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectUser;