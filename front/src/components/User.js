import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { editUsers } from "../store/actions/UserAction";

const User = () => {
  // const { userChoice } = props

  // on recupere les data de notre store 
  const userChoice = useSelector((state) => state.userReducer.choiceUser);
  // console.log("state choiceUser component User", userChoice);

  const [editToggle, setEditToggle] = useState(false);
  const [editPseudo, setEditPseudo] = useState(userChoice.pseudo);
  const [editAges, setEditAge] = useState(userChoice.ages);

  setEditAge(userChoice.ages)
  setEditPseudo(userChoice.pseudo)

  // console.log("editPseudo", editPseudo, userChoice.pseudo)
  // console.log("editAges", editAges, userChoice.ages)

  // console.log("component userChoice ", userChoice)
  const handleDel = (e) => {
    if (window.confirm("Voulez vous supprimer cet user")) {
      console.log("c'est supprimé")
      // store.dispatch(deletePost(userChoice._id));
    }
  };

  const handleEditUser = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const userData = {
      pseudo: editPseudo,
      ages: editAges,
      likes: userChoice.likes,
      id: userChoice._id,
    };

    // store.dispatch(editUsers(userData));
    console.log(userData)
    setEditToggle(false);
  };


  return (
    <div>
      {userChoice && (
        <div>
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
                    onChange={(e) => { setEditPseudo(e.target.value) }}
                  />
                  <input
                    type="number"
                    defaultValue={userChoice.ages}
                    onChange={(e) => setEditAge(e.target.value)} />

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

        </div>
      )}
    </div>
  );
};

export default User;
