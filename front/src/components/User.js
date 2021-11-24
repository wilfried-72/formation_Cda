import React from "react";

const User = (props) => {
  const { userChoice } = props
  // console.log("props userChoice ", userChoice);

  return (
    <div>
      {userChoice && (
        <div className="user-container">
          <div className="user">
            <h3>{userChoice.pseudo}</h3>
            <img src="https://thispersondoesnotexist.com/image" alt="" />
            <h5>{userChoice.ages} ans</h5>
            <p>Like {userChoice.likes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
