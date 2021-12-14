import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { store } from '../store';
import { addUser, deleteFlashsUser } from '../store/actions/UserAction';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CreateUser = () => {

    const message = useSelector((state) => state.userReducer.flashs);
    // console.log("state message", message)
    const TypeMessage = useSelector((state) => state.userReducer.typeFlashs);
    // console.log("state TypeMessage", TypeMessage)

    const [pseudo, setPseudo] = useState("");
    const [ages, setAge] = useState("");

    if (message) {
        // setEditSalert(message)
        const MySwalCreateUser = withReactContent(Swal)
        MySwalCreateUser.fire({
            title: <strong>{message}</strong>,
            icon: TypeMessage,
            timer: 3000,
            showClass: {
                popup: 'animate__animated animate__backInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutDown'
            },
            willClose: () => { store.dispatch(deleteFlashsUser()) }
        })
    }

    // ici la fonction est asynchrone
    const handleFormUser = async (e) => {
        //empeche le formunliare d'etre submiter
        e.preventDefault();
        // si tille et content n'est pas vide alors
        if (pseudo && ages) {
            const dataCreateUser = {
                pseudo,
                ages,
            };
            // console.log(dataCreateUser);
            store.dispatch(addUser(dataCreateUser));
            setPseudo("");
            setAge("");
        }
    };


    return (
        <div className="createUser">
            <Navigation />
            <h2>Création d'un utilisateur</h2>
            <div className="addUser">
                <form onSubmit={(e) => handleFormUser(e)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Votre pseudo"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Votre âge"
                            value={ages}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    {/* <span>{message}</span> */}
                    <div className="formButton">
                        <input type="submit" value="Créer" />
                        <input type="button"
                            value="Annuler"
                            onClick={() => store.dispatch(deleteFlashsUser())} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;