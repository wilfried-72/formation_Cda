/*
 * Posts Controllers
 * ****************** */

// Import Model
const Posts = require("../database/model/posts");

// GetAll
exports.getAll = async (req, res) => {
  // sans populate
  const posts = await Posts.find().sort("-createdDateIso");

  //  avec populate
  // const posts = await Posts.find().populate("user").sort("-createdDateIso");

   console.log("Get posts","dbPosts", posts );
  // res.json({ message: "Voici les " + posts.length + " post(s)", posts });
  res.json({posts});
};

exports.getOne = async (req, res) => {
  // sans populate
  const posts = await Posts.findById(req.params.id);

  //  avec populate
  // const posts = await Posts.findById(req.params.id).populate("user");

  // console.log("Get one posts", req.query, req.params.id);
  res.json({ message: "Voici le post demandé", posts });
};

// Create
exports.create = (req, res) => {
  const b = req.body;
  // console.log("Create post", "req.body", req.body);
  if (b.title && b.author) {
    // On définit la construction de notre article
    const posts = new Posts({
      ...req.body,
      //   title: b.title,
      //   author: b.author,
      //   content: b.content,
      //   likes: b.likes
    });

    // Et on sauvegarde nos modifications
    posts.save((err) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Le post a été crée avec success !", data: posts });
    });
  } else res.json({ message: "Error, le post n'a pas été fait!" });
};

//update ONe
exports.editOne = (req, res) => {
  // console.log("Edit posts", req.query, req.params.id);

  Posts.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedDateTimestamp: new Date().getTime() },
    (err, data) => {
      if (err) throw err;
      res.json({ message: "Modification du Post avec success !", data });
    }
  );
};

// Delete One
exports.deleteOne = (req, res) => {
  //   console.log("delete", req.query, req.params.id);

  Posts.findByIdAndDelete(req.params.id, (err) => {
    if (err) throw err;
    res.json({
      message: "Ce post a bien été supprimé !",
    });
  });
};

// Delete All
exports.deleteAll = (req, res) => {
  //   console.log("delete");
  Posts.deleteMany({}, (err) => {
    if (err) throw err;
  });
  res.json({ message: "Tout les posts on été supprimés avec success !" });
};
