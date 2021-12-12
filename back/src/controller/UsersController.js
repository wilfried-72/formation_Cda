/*
 * User Controllers
 * ****************** */

// Import Model
const User = require("../database/model/users");
const Posts = require("../database/model/posts")

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
      res.json({ error: "Le pseudo " + pseudoFormated + " est déjà existant", message: "Ce pseudo est déjà existant", data: [] });
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
  const pseudoFormated = req.body.pseudo[0].toUpperCase() + req.body.pseudo.slice(1).toLowerCase()

  const userExits = await User.find({ "pseudo": pseudoFormated })
  // console.log("usersExits", userExits)

  const userFind = await User.findByIdAndUpdate(req.params.id)
  const userOrigin = userFind.pseudo
  // console.log("userOrigin  controlleur User ", userOrigin)

  if (userOrigin === req.body.pseudo) {
    // console.log("les deux pseudo correspondent")
    await User.findByIdAndUpdate(req.params.id, {
      ages: req.body.ages,
      updatedDateTimestamp: new Date().getTime(),
    });

    const users = await User.find().sort("pseudo");
    const usersId = await User.find({ _id: req.params.id });
    const posts = await Posts.find().sort("-createdDateTimestamp");

    // console.log("Edit users Modifié", usersId);
    // console.log("Edit User find all users", users);
    // console.log("get All posts", posts);

    res.json({
      message: "Modification du user avec success !",
      users,
      usersId,
      posts
    });
  }
  else {
    if (userExits.length > 0) {
      const users = await User.find().sort("pseudo");
      res.json({ error: "le pseudo " + req.body.pseudo + " est déjà existant", message: "Ce pseudo est déjà existant", users, });
    } else {
      // console.log("les deux pseudo ne correspondent pas")
      await User.findByIdAndUpdate(req.params.id, {
        ages: req.body.ages,
        pseudo: pseudoFormated,
        updatedDateTimestamp: new Date().getTime(),
      });

      await Posts.updateMany({ author: userFind.pseudo },
        { $set: { author: pseudoFormated } })

      // const postModified = await Posts.find({ author: pseudoFormated })
      // console.log("Les posts de cet user ", postModified)

      const users = await User.find().sort("pseudo");
      const usersId = await User.find({ _id: req.params.id });
      const posts = await Posts.find().sort("-createdDateTimestamp");

      res.json({
        message: "Modification du user avec success !",
        users,
        usersId,
        posts
      });

    }
  }

};

// Delete One
exports.deleteOne = async (req, res) => {
  console.log("delete", req.query, req.params.id);

  const userFind = await User.findByIdAndUpdate(req.params.id)
  const userOrigin = userFind.pseudo
  console.log("userOrigin  controlleur User ", userOrigin)

  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) throw err;
  });

  await Posts.deleteMany({ "author": userOrigin });

  const posts = await Posts.find().sort("-createdDateTimestamp");

  res.json({
    message: "Cet user a bien été supprimé !",
    posts
  })
};

// // Delete All
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

