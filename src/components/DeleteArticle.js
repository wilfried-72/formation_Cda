import axios from 'axios';
import React from 'react';

 // ici on supprime par le props id
const DeleteArticle = ({id}) => {
   
    const handleDelete = () => {
        //console.log ("del")
        axios.delete(process.env.REACT_APP_SERVEUR +"/"+ id)
        //ici on rafraichi la page mais il faudrait utiliser les stores data avec """redux"""
        window.location.reload()
    }

    return (
        <div>
            <button onClick={() => {
if (window.confirm('Voulez vous supprimer cet article')) {
    handleDelete()
}
            }}>Del</button>
        </div>
    );
};

export default DeleteArticle;