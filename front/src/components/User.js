import React, { useEffect, useState } from 'react';
import { deleteUser, editUsers } from '../store/actions/UserAction';
import { store } from "../store"
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'


const User = (props) => {
  const { userChoice, users } = props

  const message = useSelector((state) => state.userReducer.flashs);
  // console.log("state message", message)
  const dataChoiceUser = users.find((userFind) => userFind.pseudo === userChoice.pseudo);

  const [editToggle, setEditToggle] = useState(false);
  const [editPseudo, setEditPseudo] = useState(userChoice.pseudo);
  const [editAges, setEditAge] = useState(userChoice.ages);

  useEffect(() => {
    setEditPseudo(userChoice.pseudo);
    setEditAge(userChoice.ages)
  }, [userChoice])

  // console.log("editPseudo", editPseudo)
  // console.log("editAges", editAges)

  // console.log("component userChoice ", userChoice)
  const handleDel = (e) => {

    Swal.fire({
      title: 'Etes-vous sûr de supprimer cet utilisateur',
      text: "Cette action est irreversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      showClass: {
        popup: 'animate__animated animate__zoomInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__zoomOut'
      }      
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("c'est supprimé")
        store.dispatch(deleteUser(userChoice._id));
      }
    })

    // if (window.confirm("Voulez vous supprimer cet user")) {
 
    // }
  };

  const handleEditUser = (e) => {
    e.preventDefault();

    setEditPseudo(userChoice.pseudo)
    setEditAge(userChoice.ages)

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide

    const userData = {
      pseudo: editPseudo,
      ages: editAges,
      likes: userChoice.likes,
      id: userChoice._id,
    };
    // console.log(userData)
    store.dispatch(editUsers(userData));

    setEditToggle(false);

  };


  return (

    <div className="user-container">
      {dataChoiceUser && (
        <div className="user">
          <div className="userEdit">
            <img
              onClick={() => setEditToggle(!editToggle)}
              src="./icons/edit.svg"
              alt="edit"
            />
            <img onClick={handleDel} src="./icons/delete.svg" alt="del" />
          </div>

          <img src="https://thispersondoesnotexist.com/image" alt="" />

          {editToggle ? (
            <form onSubmit={(e) => handleEditUser(e)}>
              <input
                type="text"
                defaultValue={dataChoiceUser.pseudo}
                onChange={(e) => { setEditPseudo(e.target.value) }}
              />
              <input
                type="number"
                defaultValue={dataChoiceUser.ages}
                onChange={(e) => { setEditAge(e.target.value) }} />
              <input type="submit" value="modifier" />
            </form>
          ) : (
            <div>
              <h3>{dataChoiceUser.pseudo}</h3>
              <span>{message}</span>
              <h5>{dataChoiceUser.ages} ans</h5>
            </div>

          )}
          <p>Like {dataChoiceUser.likes}</p>
        </div>
      )}
    </div>

  );
};

export default User;

