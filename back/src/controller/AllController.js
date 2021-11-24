/*
 * All Controllers
 * ****************** */

// Import Model
const Posts = require("../database/model/posts"),
User = require("../database/model/users"),
Favorites = require("../database/model/favorites")

// GetAll
exports.getAll = async (req, res) => {
  const posts = await Posts.find().sort("-createdDateIso");
  const users = await User.find().sort("pseudo");
  const favorites = await Favorites.find();
  //   console.log("Get posts","dbPosts", dbPosts);
  res.json({ message: "Voici toutes les datas", posts, users, favorites});
};