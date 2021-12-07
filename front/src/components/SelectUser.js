import React from 'react';
import { store } from '../store';
import { choiceUser } from '../store/actions/UserAction';

const SelectUser = (props) => {
    const { users } = props;
    // console.log("state users component selectUser  ", users);

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
                            {users && users.map((select) => {
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