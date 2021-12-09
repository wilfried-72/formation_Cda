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
// exports.getOne = async (req, res) => {
//   const users = await User.findById(req.params.id);
//   // console.log("Get one User", req.query, req.params.id);
//   res.json({ message: "Voici l'utilisateur demandé", users });
// };

// Create
exports.create = async (req, res) => {
  const b = req.body;
  // console.log("Create user", "req.body", req.body);

  // ce if est géré au niveau front donc pas obligatoire
  if (b.pseudo) {
    const pseudoFormated = b.pseudo[0].toUpperCase() + b.pseudo.slice(1).toLowerCase()
    // console.log("pseudoFormated", pseudoFormated)

    const userExits = await User.find({ "pseudo": pseudoFormated })
    // console.log("usersExits", userExits)
    // console.log("usersExits", userExits.length )

    if (userExits.length > 0) {
      res.json({ type: "Error", message: "Ce pseudo est déjà existant" });
    } else {
      //On définit la construction de notre user
      const user = new User({
        pseudo: pseudoFormated,
        ages: b.ages
      });

      // Et on sauvegarde nos modifications
      user.save((err) => {
        if (err) {
          throw err;
        }

        res.json({
          message: "Votre compte a bien été crée !",
          data: user,
        });
      });
    }
  } else res.json({ type: "Error", message: "Veuillez saisir un pseudo" });
};

//update ONe
exports.editOne = async (req, res) => {
  // console.log("Edit User", req.body, req.params.id);
  await User.findByIdAndUpdate(req.params.id, {
    ...req.body,
    updatedDateTimestamp: new Date().getTime(),
  });

  const users = await User.find().sort("pseudo");
  // console.log("Edit User find users", users);
  res.json({
    message: "Modification du user avec success !",
    users,
  });
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
// exports.deleteAll = (req, res) => {
//   //   console.log("delete");
//   User.deleteMany({}, (err) => {
//     if (err) throw err;
//   });
//   res.json({ message: "Tout les User on été supprimés avec success !" });
// };


// Add like
exports.addLikes = async (req, res) => {
  // console.log("addLikes User", req.body, req.params.id);
  await User.findByIdAndUpdate(req.params.id, {
    ...req.body,
    updatedDateTimestamp: new Date().getTime(),
  });

  const users = await User.find().sort("pseudo");
  // console.log("addLikes User find .", users);
  res.json({
    message: "Ajout like for user !",
    users,
  });
};

