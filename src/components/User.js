import React from "react";
import { useSelector } from "react-redux";
import {isEmpty} from "./Utils"

const User = () => {

  const user = useSelector((state) => state.userReducer)

  console.log("user", user)
  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user[0]) && user[0].pseudo}</h3>
        <img src="https://thispersondoesnotexist.com/image" alt="" />
        <p>{!isEmpty(user[0]) && user[0].age} ans</p>
        {/* ici si user[0].like est superieur à 1 on ùet le "s" sinon c'est null avec le test empty*/}
        <p>Like{ !isEmpty(user[0]) && user[0].likes > 1 ? "s" : null} : {!isEmpty(user[0]) && user[0].likes}</p>
      </div>
    </div>
  );
};

export default User;
