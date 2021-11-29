import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ChoiceUser = () => {

    // on recupere les data de notre store au niveau du post reducer
    // console.log("state posts ", posts);
    const users = useSelector((state) => state.userReducer);
    // console.log("state user ", users);

    const [edituser, setUser] = useState("");
    const [editFormUser, setEditFormUser] = useState(false);
   

    // console.log(editFormUser)

    const select = [];
    if (users.length > 0) {
        users.map((user) => select.push(user));
        select.sort(function (a, b) {
            return a.pseudo - b.pseudo;
        });
    }

    // console.log(select);

    function handleChangeUser(e) {
        // console.log("Selected!!", e.target.value);

        setEditFormUser(false);

        if (e.target.value.length > 0)
            if (e.target.value === "all") setUser("");
            else
                setUser(users.find((userFind) => userFind.pseudo === e.target.value));
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

export default ChoiceUser;