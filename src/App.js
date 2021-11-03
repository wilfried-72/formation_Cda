import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";

// import la fonction isEmpty dans le fichier utils.js
import {isEmpty} from "./components/Utils"

const App = () => {

  // on recupere les data de notre store au niveau du post reducer
  const posts = useSelector((state) => state.postReducer)
//console.log(posts)
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {/* ici on map les data contenu dans le post dans l'enafnt Post */}
          {/* Le map s'effectue si post n'est pas vide via la fct isEmpty */}
          {!isEmpty(posts) && posts.map((post, index) => (<Post post={post} index={index} key ={index} />
          ))}
          </div>
        <User />
      </div>
    </div>
  );
};

export default App;
