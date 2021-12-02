import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";


const User = () => {
  // const { userChoice } = props

  // on recupere les data de notre store 
  const userChoice = useSelector((state) => state.userReducer.choiceUser);
  // console.log("state choiceUser component User", userChoice);

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
    if (window.confirm("Voulez vous supprimer cet user")) {
      console.log("c'est supprimé")
      // store.dispatch(deletePost(userChoice._id));
    }
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
    console.log(userData)
    // store.dispatch(editUsers(userData));
   
    setEditToggle(false);

  };


  return (
    <div className="user-container">
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
              defaultValue={userChoice.pseudo}
              onChange={(e) => {setEditPseudo(e.target.value)}}
            />
            <input
              type="number"
              defaultValue={userChoice.ages}
              onChange={(e) => {setEditAge(e.target.value)}} />
            <input type="submit" value="modifier" />
          </form>
        ) : (
          <div>
            <h3>{userChoice.pseudo}</h3>
            <h5>{userChoice.ages} ans</h5>
          </div>

        )}
        <p>Like {userChoice.likes}</p>
      </div>
    </div>
  );
};

export default User;

