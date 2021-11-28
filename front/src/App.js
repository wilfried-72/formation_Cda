import React, { useState } from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import TopLike from "./components/TopLike";

const App = () => {
  // on recupere les data de notre store au niveau du post reducer
  const posts = useSelector((state) => state.postReducer);
  // console.log("state posts ", posts);
  const users = useSelector((state) => state.userReducer);
  // console.log("state user ", users);

  const [edituser, setUser] = useState("");  
  const [editFormUser, setEditFormUser] = useState(false);
  const [pseudo, setPseudo] = useState("");  
  const [ages, setAge] = useState("");  

  // console.log(editFormUser) 

  const select = [];
  if (users.length > 0) users.map((user) => select.push(user));
  // console.log(select);

  function handleChangeUser(e) {
    // console.log("Selected!!", e.target.value);

    setEditFormUser(false)

    if (e.target.value.length > 0)
      if (e.target.value === "all") setUser("");
      else
        setUser(users.find((userFind) => userFind.pseudo === e.target.value));
  }

    // ici la fonction est asynchrone
    const handleFormUser = async (e) => {
      //empeche le formunliare d'etre submiter
      e.preventDefault();
      // si tille et content n'est pas vide alors
      if (pseudo && ages) {
        const data = {
          pseudo,
          ages,
        };   
        console.log(data) 
          // dispatch(addPosts(data))
          setPseudo("");
          setAge("");
  
      }
    };

  return (
    <div>

      <div className="header">

        <div className="userChoice">

          <div>
            <h2>Choisir user:</h2>
            <select onChange={(e) => handleChangeUser(e)}>
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

          <div className="addUser">
            {!edituser && (
              <h2 onClick={() => setEditFormUser(!editFormUser)}>Ajouter user</h2>)
            }

            {editFormUser && (
              <form onSubmit={(e) => handleFormUser(e)}>
                <input
                  type="text"
                  placeholder="Votre pseudo"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Votre âge"
                  value={ages}
                  onChange={(e) => setAge(e.target.value)}
                />

                <input type="submit" value="Créer" />
              </form>
            )}

          </div>
        </div>


        <div className="Topfour">
          <div className="TopfourContent">
            <h3>Top 4</h3>
            <ul>
              {users.length > 0 && users.sort(function (a, b) { return b.likes - a.likes }).slice(0, 4).map((user, index) => (
                <li key={user._id} >
                  <TopLike user={user} index={index} />
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      <PostForm userChoice={edituser} />
      <div className="content">
        <div className="post-container">
          {/* Le map s'effectue si post n'est pas vide via la fct isEmpty */}
          {posts.length > 0 &&
            !edituser &&
            posts.map((post, index) => (
              <Post
                post={post}
                index={index}
                key={index}
                userChoice={edituser}
              />
            ))}

          {posts.length > 0 &&
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




    </div >
  );
};

export default App;
