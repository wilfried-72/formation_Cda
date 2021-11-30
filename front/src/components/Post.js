import React, { useState } from "react";
import { editPosts, deletePost } from "../store/actions/PostAction";
import Like from "./Like";
import { store } from "../store"

// import la fonction isEmpty dans le fichier utils.js
import { datePaser } from "./Utils";
import { useSelector } from "react-redux";

const Post = (props) => {
  const { post, index} = props;

  // on recupere les data de notre store 
  const userChoice = useSelector((state) => state.userReducer.choiceUser);
  // console.log("state choiceUser", userChoice);


  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);

  //  console.log("userChoice post " ,userChoice.pseudo)
  // const user = useSelector((state) => state.userReducer);

  // dispatch les action
  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const postData = {
      title: post.title,
      author: userChoice.pseudo,
      content: editContent,
      likes: post.likes,
      id: post._id,
    };

    // console.log(postData)
    store.dispatch(editPosts(postData));
    setEditToggle(false);
  };

  const handleDel = (e) => {
    if (window.confirm("Voulez vous supprimer cet article")) {
      store.dispatch(deletePost(post._id));
    }
  };

  // console.log("userChoice " ,userChoice.pseudo)
  // console.log("postAuthor " ,post.author)

  return (
    <div className="post">
      {userChoice.pseudo === post.author && (
        <div>
          {/* ici setEditiongToggle prend l'inverse de editToggle */}
          {/* si editToggle est à true, setEditToggle passe à false et inversement */}
          <img
            onClick={() => setEditToggle(!editToggle)}
            src="./icons/edit.svg"
            alt="edit"
          />
          <img onClick={handleDel} src="./icons/delete.svg" alt="del" />
        </div>
      )}
      <h2>Article {index === 0 ? null : index + 1}</h2>
      <h3>{post.title}</h3>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />
      {editToggle ? (
        <form onSubmit={(e) => handleEdit(e)}>
          <textarea
            defaultValue={post.content}
            onChange={(e) => setEditContent(e.target.value)}
          ></textarea>
          <input type="submit" value="valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>

      <div className="date">
        <h5> {!post.updatedDateTimestamp ? "Posté le " + datePaser(post.createdDateTimestamp) : "Posté le " + datePaser(post.createdDateTimestamp) + " (Modifié le " + datePaser(post.updatedDateTimestamp) + ")"}
        </h5>
      </div>

    </div>
  );
};

export default Post;
