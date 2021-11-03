import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPosts, deletePost, getPosts } from "../actions/post.action";
import Like from "./Like";

const Post = ({ post, index }) => {
  const [editToggle, setEditToggle] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const user = useSelector((state) => state.userReducer);
  // dispatch les action
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const postData = {
      title: post.title,
      author: user[0].pseudo,
      content: editContent,
      likes: post.likes,
      id: post.id,
    };

    dispatch(editPosts(postData));
    setEditToggle(false);
  };

  const handleDel = (e) => {
    if (window.confirm("Voulez vous supprimer cet article")) {
      dispatch(deletePost(post.id));
    }
    dispatch(getPosts());
  };

  return (
    <div className="post">
      {/* (user.length > 0) peut remplacer {!isEmpty(user[0]) */}
      {(user.length > 0) && user[0].pseudo === post.author && (
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
      <h2>Article {index === 0 ? null : index}</h2>
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
    </div>
  );
};

export default Post;
