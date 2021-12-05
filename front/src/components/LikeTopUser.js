import React from "react";

const LikeTopUser = (props) => {
  const { user } = props;
  // console.log(user);

  return (
    <div className="topLike">
      <p>{user.pseudo}</p>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{user.likes}</span>
    </div>
  );
};

export default LikeTopUser;
