import React, { useState } from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useEffect } from "react";
import Articles from "../components/Articles";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(process.env.REACT_APP_SERVEUR)
      .then((res) => setNewsData(res.data));
  };

  const handleSubmit = (e) => {
    // e.preventDefault() empeche le rechargement de la page
    e.preventDefault();
    console.log("submit !");

    if (content.length < 140) {
      setError(true);
    } else {
      // pour poster des data dans un formulaire
      axios
        .post(process.env.REACT_APP_SERVEUR, {
          //   author: author,
          //   content: content,
          //   si variable ont les même nom alors on peut simplifier par:
          author,
          content,
          date: Date.now(),
        })
        .then(() => {
          //ici on remet à zero les variables author et content
          setAuthor("");
          setContent("");
          getData();
          setError(false);
        });
    }
  };

  return (
    <div className="news-container">
      <Navigation />
      <Logo />
      <h1>News</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Nom"
          value={author}
        />
        <textarea
          // ici on fait un style sur textArea border: error ? => condition vrai : condition faux
          style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Message"
          value={content}
        ></textarea>
        {error && <p>veuillez écrire un minimun de 140 caracteres</p>}
        {/* raccourci input:submit et entrée */}
        <input type="submit" value="Envoyer" />
      </form>
      <ul>
        {/* {} cela veut dire que la mettre du javascript */}
        {newsData
          .sort((a, b) => b.date - a.date)
          .map((article) => (
            <Articles article={article} key={article.id} />
          ))}
      </ul>
    </div>
  );
};

export default News;
