/*
 * User Controllers
 * ****************** */

// Import Model
const User = require("../database/model/users");

// GetAll
exports.getAll = async (req, res) => {
  const users = await User.find().sort("pseudo");
  // console.log("Get User","dbUser", users);
  res.json({ users });
};

// GetOne
exports.getOne = async (req, res) => {
  const users = await User.findById(req.params.id);
  // console.log("Get one User", req.query, req.params.id);
  res.json({ message: "Voici l'utilisateur demandé", users });
};

// Create
exports.create = (req, res) => {
  const b = req.body;
  // console.log("Create user", "req.body", req.body);
  if (b.pseudo) {
    // On définit la construction de notre article
    const user = new User({
      ...req.body,
    });

    // Et on sauvegarde nos modifications
    user.save((err) => {
      if (err) {
        throw err;
      }

      res.json({ message: "L'utilisateur a été crée avec success !", data: user });
    });
  } else res.json({ message: "Error, l'utilisateur n'a pas été fait!" });
};

//update ONe
exports.editOne = (req, res) => {
  // console.log("Edit User", req.query, req.params.id);

  User.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedDateTimestamp: new Date().getTime() },
    (err, data) => {
      if (err) throw err;
      res.json({ message: "Modification du user avec success !", data });
    }
  );
};

// Delete One
exports.deleteOne = (req, res) => {
  //   console.log("delete", req.query, req.params.id);

  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) throw err;
    res.json({
      message: "Cet user a bien été supprimé !",
    });
  });
};

// Delete All
exports.deleteAll = (req, res) => {
  //   console.log("delete");
  User.deleteMany({}, (err) => {
    if (err) throw err;
  });
  res.json({ message: "Tout les User on été supprimés avec success !" });
};
