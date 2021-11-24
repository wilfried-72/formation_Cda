/*
 * favoris Controllers
 * ****************** */

// Import Model
const Favorites= require("../database/model/favorites");

// GetAll
exports.getAll = async (req, res) => {
  const favorites = await Favorites.find();
  //   console.log("Get User","dbUser", dbUser);
  res.json({ message: "Voici les " + favorites.length + " favoris", favorites });
};

// GetOne
exports.getOne = async (req, res) => {
  const favorites = await Favorites.findById(req.params.id);
  // console.log("Get one User", req.query, req.params.id);
  res.json({ message: "Voici le favoris", favorites });
};

// Create
exports.create = (req, res) => {
  const b = req.body;
  // console.log("Create user", "req.body", req.body);
  if (b.country) {
    // On définit la construction de notre article
    const favorites = new Favorites({
      ...req.body,
    });

    // Et on sauvegarde nos modifications
    favorites.save((err) => {
      if (err) {
        throw err;
      }

      res.json({ message: "Le favoris a bien été ajouté !", data: favorites });
    });
  } else res.json({ message: "Error, le favoris n'a pas été ajouté !" });
};

//update ONe
exports.editOne = (req, res) => {
  // console.log("Edit User", req.query, req.params.id);

  Favorites.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedDateTimestamp: new Date().getTime() },
    (err, data) => {
      if (err) throw err;
      res.json({ message: "Modification du favoris !", data });
    }
  );
};

// Delete One
exports.deleteOne = (req, res) => {
  //   console.log("delete", req.query, req.params.id);

  Favorites.findByIdAndDelete(req.params.id, (err) => {
    if (err) throw err;
    res.json({
      message: "Ce favoris a bien été supprimé !",
    });
  });
};

// Delete All
exports.deleteAll = (req, res) => {
  //   console.log("delete");
  Favorites.deleteMany({}, (err) => {
    if (err) throw err;
  });
  res.json({ message: "Tout les favoris ont été supprimés avec success !" });
};
