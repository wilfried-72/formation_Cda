import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addPosts, getPosts} from "../actions/post.action";

const PostForm = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  //on va chercher les data user dans le store
  const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  // ici la fonction est asynchrone
  const handleForm = async (e) => {
  //empeche le formunliare d'etre submiter
  e.preventDefault()

  // si tille et content n'est pas vide alors
  if (title && content) {
    const data = {
    title,
    content,
    author: user[0].pseudo,
    likes: 0,
    }
  
  //ici on envoit les data au store
  await dispatch(addPosts(data))
  // ici le code sera effectué apres le await (via la fonction asynchrone)
  setTitle("")
  setContent("")
  // ici on recharge les data du store car nous avons un id qui a éte implémenté par notre basse de donnees
  dispatch(getPosts())
  }
}

  return (
    <div className="form-container">
      <form onSubmit={ (e) => handleForm(e)} >
        <input type="text" placeholder="Titre du poste"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
