import React from "react";
import { useSelector } from "react-redux";
import { addLike } from "../store/actions/PostAction";
import { addUserLike } from "../store/actions/UserAction";
import { store } from "../store"

const Like = (props) => {
  // console.log("props " ,props)
  const { post } = props;
  // console.log( "post Component Like " ,post);

  const users = useSelector((state) => state.userReducer.users);
  // console.log("user in like component", users)
  const userChoice = useSelector((state) => state.userReducer.choiceUser);
  // console.log("userChoiceLike ", userChoice)

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post._id,
    };

    store.dispatch(addLike(postData));

    if (post.author === userChoice.pseudo) {
      const userData = {
        ages: userChoice.ages,
        pseudo: userChoice.pseudo,
        likes: ++userChoice.likes,
        id: userChoice._id
      }
      // console.log("userData ", userData )
      console.log("author correspond");
      // store.dispatch(addUserLike(userData));

    }
    else {

      const userDataNone = {
        ages: users.find((userFind) => userFind.pseudo === post.author).ages,
        pseudo: users.find((userFind) => userFind.pseudo === post.author).pseudo,
        likes: ++users.find((userFind) => userFind.pseudo === post.author).likes,
        id: users.find((userFind) => userFind.pseudo === post.author)._id,
      };

      // console.log("userDataNone ", userDataNone)
      console.log("author ne correspond pas");
      store.dispatch(addUserLike(userDataNone));
    }

  }

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
