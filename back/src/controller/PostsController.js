/*
 * Posts Controllers
 * ****************** */

// Import Model
const Posts = require("../database/model/posts");

// GetAll
exports.getAll = async (req, res) => {
  // sans populate
  const posts = await Posts.find().sort("-createdDateTimestamp");

  //  console.log("Get posts","dbPosts", posts );
  // res.json({ message: "Voici les " + posts.length + " post(s)", posts });
  res.json({ posts });
};

exports.getOne = async (req, res) => {
  // sans populate
  const posts = await Posts.findById(req.params.id);
  // console.log("Get one posts", req.query, req.params.id);
  res.json({ message: "Voici le post demandé", posts });
};

// Create
exports.create = async (req, res) => {
  const b = req.body;
  // console.log("Create post", "req.body", req.body);
  if (b.title && b.author) {
    // On définit la construction de notre article

    // Si front utilisé pour rafraichir les datas apres un del one
    // ************************************
    const posts = new Posts({
      ...req.body,
      //   title: b.title,
      //   author: b.author,
      //   content: b.content,
      //   likes: b.likes
      createdDateTimestamp: new Date().getTime(),
    });

    // Et on sauvegarde nos modifications
    posts.save((err) => {
      if (err) throw err;
    });
    // ************************************

    // Si back utilisé pour rafraichir les datas apres un del one
    // ************************************
    // const posts = await Posts.create({
    //   ...req.body,
    //   createdDateTimestamp: new Date().getTime(),
    // });
    // const dataGet = await Posts.find({}).sort("-createdDateTimestamp");
    // console.log(dataGet)
    // ****************************
    res.json({
      message: "Le post a été crée avec success !",
      data: posts,
      // Si back utilisé pour rafraichir les datas apres un del one
      // ************************************
      // dataGet,
      // ************************************
    });
  } else res.json({ message: "Error, le post n'a pas été fait!" });
};

// Si front utilisé pour rafraichir les datas apres un del one
// ************************************
//update ONe
// exports.editOne = (req, res) => {
//   // console.log("Edit posts", req.query, req.params.id);

//   Posts.findByIdAndUpdate(
//     req.params.id,
//     { ...req.body, updatedDateTimestamp: new Date().getTime() },
//     (err, data) => {
//       if (err) throw err;
//       res.json({ message: "Modification du Post avec success !", data });
//     }
//   );
// };
// ************************************

// Si back utilisé pour rafraichir les datas apres un del one
// ************************************
//update ONe
exports.editOne = async (req, res) => {
  // console.log("Edit posts", req.query, req.params.id);
  const data = await Posts.findByIdAndUpdate(req.params.id, {
    ...req.body,
    updatedDateTimestamp: new Date().getTime(),
  });

  let dataEdit = await Posts.find({ _id: req.params.id });
  // console.log("Find", dataEdit);
  res.json({
    message: "Modification du Post avec success !",
    data,
    dataEdit,
  });
};
// ************************************

// Delete One
exports.deleteOne = async (req, res) => {
  //   console.log("delete", req.query, req.params.id);

  Posts.findByIdAndDelete(req.params.id, (err) => {
    if (err) throw err;
  });

  // Si back utilisé pour rafraichir les datas apres un del one
  // ************************************
  // pour rafraichier les data apres un del pour le front
  // const dataDel = await Posts.find({}).sort("-createdDateTimestamp");
  // ************************************

  res.json({
    message: "Ce post a bien été supprimé !",

    // Si back utilisé pour rafraichir les datas apres un del one
    // ************************************
    // pour rafraichier les data apres un del pour le front
    // dataDel,
    // ************************************
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
