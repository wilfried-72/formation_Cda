/*
 * Application.js
 ******************************/
const express = require("express"),
  app = express(),
  mongoose = require("mongoose");

//declaration du port utiliséé avec dotenv sinon port 3000 par défaut
require("dotenv").config();
const port = process.env.PORT || 4000;

// ************** MongoDB ******************
//connection a la base de donnée mongoDB avec le localhost DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connecter a MongoDB"))
  .catch((err) => console.log(err));
// ************* / MongoDB ******************

//app.use
// Express Static (Permet de pointer un dossier static sur une URL)
app.use("/assets", express.static("public"));

// qui nous permet de parser des data d'une req a une autre
// Si vous utilisez Express 4.16+, on fait comme ceci maintenant
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

//Creation des routes
const ROUTER = require("./src/router");
app.use("/api", ROUTER);

//Page erreur 404
app.use("*", (req, res) => {
  res.status(401).json({ error: "page 404" });
});

app.listen(port, () => {
  console.log("le serveur tourne sur le prt: " + port);
});
