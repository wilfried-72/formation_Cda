import React, { useState } from "react";
import { addPosts } from "../store/actions/PostAction";
import { store } from "../store"
import { useSelector } from "react-redux";

const PostForm = () => {

  // on recupere les data de notre store 
  const userChoice = useSelector((state) => state.userReducer.choiceUser);
  // console.log("state choiceUser component PostForm", userChoice);


  // constante pour poster un nouveau article 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  // ici la fonction est asynchrone pour poster un nouveau article
  const handleForm = async (e) => {
    //empeche le formunliare d'etre submiter
    e.preventDefault();
    // si tille et content n'est pas vide alors
    if (title && content) {
      const data = {
        title,
        content,
        author: userChoice.pseudo,
      };
      store.dispatch(addPosts(data))
      setTitle("");
      setContent("");

    }
  };

  return (
    <div>
        <div className="form-container">
          <form onSubmit={(e) => handleForm(e)}>
            <input
              type="text"
              placeholder="Titre du poste"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Postez vos pensées..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input type="submit" value="Envoyer" />
          </form>
        </div>
    </div>
  );
};

export default PostForm;
