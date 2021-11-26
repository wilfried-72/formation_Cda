import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosts} from "../actions/post.action";

const PostForm = (props) => {
  const { userChoice } = props;

  // console.log("userChoice PostForm", userChoice);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //on va chercher les data user dans le store
  // const user = useSelector((state) => state.userReducer)
  const dispatch = useDispatch();

  // ici la fonction est asynchrone
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
        dispatch(addPosts(data))
        setTitle("");
        setContent("");

    }
  };

  return (
    <div>
      {userChoice && (
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
      )}
    </div>
  );
};

export default PostForm;
