import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

const Like = ({ post }) => {
  const user = useSelector((state) => state.userReducer)
  // console.log(user)
  const dispatch = useDispatch()

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post.id
    }

    const userData = {
      pseudo: user[0].pseudo,
      likes: ++user[0].likes,
      id: user[0].id
    }

    const userDataNone = {
      pseudo: user[0].pseudo,
      likes: user[0].likes,
      id: user[0].id
    }

    dispatch(addLike(postData))
    if (post.author === user[0].pseudo) dispatch(addUserLike(userData))
    else dispatch(addUserLike(userDataNone))

  }

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
