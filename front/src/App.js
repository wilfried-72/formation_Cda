import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";

// import la fonction isEmpty dans le fichier utils.js
import { isEmpty } from "./components/Utils";

const App = () => {
  // on recupere les data de notre store au niveau du post reducer
  const posts = useSelector((state) => state.postReducer);
  // console.log("state posts ", posts);
  const users = useSelector((state) => state.userReducer);
  // console.log("state user ", users);

  const [edituser, setUser] = useState("");

  const select = [];
  if (users.length > 0) users.map((user) => select.push(user));
  // console.log(select);

  function handleChangeSelect(e) {
    // console.log("Selected!!", e.target.value);
    if (e.target.value.length > 0)
      if (e.target.value === "all") setUser("");
      else
        setUser(users.find((userFind) => userFind.pseudo === e.target.value));
  }

  return (
    <div>
      <div>
        <h2>Utilisateur</h2>
        <select onChange={(e) => handleChangeSelect(e)}>
          <option value="all">All</option>
          {select.map((select) => {
            return (
              <option value={select.pseudo} key={select._id}>
                {select.pseudo}
              </option>
            );
          })}
        </select>
      </div>
      <PostForm userChoice={edituser} />
      <div className="content">
        <div className="post-container">
          {/* Le map s'effectue si post n'est pas vide via la fct isEmpty */}
          {!isEmpty(posts) &&
            !edituser &&
            posts.map((post, index) => (
              <Post
                post={post}
                index={index}
                key={index}
                userChoice={edituser}
              />
            ))}

          {!isEmpty(posts) &&
            edituser &&
            posts
              .filter((postFilter) => postFilter.author === edituser.pseudo)
              .map((post, index) => (
                <Post
                  post={post}
                  index={index}
                  key={index}
                  userChoice={edituser}
                />
              ))}
        </div>
        <User userChoice={edituser} />
      </div>
    </div>
  );
};

export default App;
