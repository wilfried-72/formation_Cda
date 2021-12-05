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
  res.json({ message: "Voici les " + posts.length + " post(s)", posts });
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
    await Posts.create({
      ...req.body,
      createdDateTimestamp: new Date().getTime(),
    });
    const posts = await Posts.find({}).sort("-createdDateTimestamp");
    // console.log(posts)

    res.json({
      message: "Le post a été crée avec success !",
      posts,
    });
  } else res.json({ message: "Error, le post n'a pas été fait!" });
};

//update ONe
exports.editOne = async (req, res) => {
  // console.log("Edit posts", req.query, req.params.id);
  await Posts.findByIdAndUpdate(req.params.id, {
    ...req.body,
    updatedDateTimestamp: new Date().getTime(),
  });

 const posts = await Posts.find({}).sort("-createdDateTimestamp");
  // console.log("Find", dataEdit);
  res.json({
    message: "Modification du Post avec success !",
    posts,
  });
};
// ************************************

// Delete One
exports.deleteOne = async (req, res) => {
  //   console.log("delete", req.query, req.params.id);

  Posts.findByIdAndDelete(req.params.id, async (err) => {
    if (err) throw err;
  });
  const posts = await Posts.find({}).sort("-createdDateTimestamp");

  res.json({
    message: "Ce post a bien été supprimé !",
    posts,
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
