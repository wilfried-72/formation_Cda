import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../actions/post.action";
import { addUserLike } from "../actions/user.action";

const Like = (props) => {
  // console.log("props " ,props)
  const { post, userChoice } = props;

  // console.log("userChoiceLike ", userChoice)
  // console.log(post);

  const user = useSelector((state) => state.userReducer);
  // console.log(user)
  const dispatch = useDispatch();

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      likes: ++post.likes,
      id: post._id,
    };

    const userData = {
      ages: userChoice.ages,
      pseudo: userChoice.pseudo,
      likes: parseInt(userChoice.likes) +1 ,
      id: userChoice._id
    }

    const userDataNone = {
      ages : user.find((userFind) => userFind.pseudo === post.author).ages,
      pseudo: user.find((userFind) => userFind.pseudo === post.author).author,
      likes: 1,
      id: user.find((userFind) => userFind.pseudo === post.author)._id,
    };

    // if (post) {
    //   console.log("post.author", post.author);
    //   console.log("userChoice.pseudo", userChoice.pseudo);
    //   console.log("user", user);
    //   console.log(
    //     "find id User ",
    //     user.find((userFind) => userFind.pseudo === post.author)._id
    //   );
    // }

    dispatch(addLike(postData));
    // dispatch(addUserLike(userDataNone))

    if (post.author === userChoice.pseudo) {
      console.log("author correspond");
      dispatch(addUserLike(userData));

    } else {
      console.log("author ne correspond pas");
      dispatch(addUserLike(userDataNone));
    }
  };

  return (
    <div onClick={handleLike}>
      <img src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
