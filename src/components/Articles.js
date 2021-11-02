import React, { useState } from "react";
import axios from "axios";
import DeleteArticle from "./DeleteArticle";

const Articles = ({ article }) => {
  const [isEditing, setEditing] =useState(false)
  const [editedContent, setEditedContent] =useState("")

  const datePaser = (date) => {
    let newDate = new Date(date).toLocaleDateString('fr-FR',{
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    })
    return newDate
  }
  const handleEdit = () => {
    const data = {
      author: article.author,
      // ici si pas de texte modifier on remet article content dans la db
      content: editedContent ? editedContent : article.content,
      date: article.date,
      // ou mettre une autre date edit
      // date: Date.now(),
    }

    // contenu ne paeut pas être edité car on ne peut pas passer des data (props) d'un enfant vers un parent, limit de reactJs
    // il faudrait utiliser les stores data avec """redux"""
    axios.put(process.env.REACT_APP_SERVEUR+"/"+ article.id, data).then(() => {
      setEditing(false)
    })


  }

  return (
    <div className="article"
    style={{background: isEditing ? "#f3f8ff" : "white"}}>
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {datePaser(article.date)}</em>          
      </div>
      {/* ici on fait une condition sous JS si isEditing est a true alors on ouvre un text area */}
      {isEditing ? (
        // autofocus permet de renter directement dans le texte area avec la value par défaut article.content
        <textarea 
        onChange ={(e) => setEditedContent(e.target.value)}
        autoFocus 
        defaultValue={editedContent ? editedContent : article.content} ></textarea>
       ) 
        // sinon on ouvre le p
       : (
         //ici on vient donner la value du props
         // donc on fait la condition suivante si editedContent est à true alors on affiche editedContent sinon on affiche la data du props
        <p>{editedContent ? editedContent : article.content}</p>
       )}      
      <div className="btn-container">
       {isEditing ? (
        <button onClick={handleEdit}>Valider</button>
        ):  (
        <button onClick={() => setEditing(true)}>Edit</button>
        )}
    <DeleteArticle id={article.id}/>
      </div>
    </div>
  );
};

export default Articles;
