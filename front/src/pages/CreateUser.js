import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import Navigation from '../components/Navigation';
import { store } from '../store';
import { addUser } from '../store/actions/UserAction';


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const CreateUser = () => {

    const message = useSelector((state) => state.userReducer.flashs);
    // console.log("state message", message)

    const [editSalert, setEditSalert] = useState("");
    // console.log("state message1", editSalert)


    useEffect(() => {
        setEditSalert(message) 
    }, [])

    if (editSalert) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <strong>{editSalert}</strong>,
            icon: 'error',
            timer: 3000,
            willClose: () => { setEditSalert("")}
        })
    }

   const [pseudo, setPseudo] = useState("");
    const [ages, setAge] = useState("");

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
                    <span>{message}</span>
                    <div className="formButton">
                        <input type="submit" value="Créer" />
                        <input type="button" value="Annuler" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;