/*
 * Import Module
 * ************* */
const express = require("express"),
  router = express.Router(),
  app = express();

// Controllers
const PostsController = require("../controller/PostsController"),
  UsersController = require("../controller/UsersController"),
  AllController = require("../controller/AllController"),
  FavorisController = require("../controller/FavoritesController")

/*
 * Routes
 * ****** */

// Route '/posts'
router
  .get("/", AllController.getAll)

// Route '/posts'
router
  .get("/posts", PostsController.getAll)
  .get("/posts/:id", PostsController.getOne)
  .post("/posts", PostsController.create)
  .put("/posts/:id", PostsController.editOne)
  .delete("/posts/:id", PostsController.deleteOne)
  .delete("/posts", PostsController.deleteAll)

  // Route '/users'
  .get("/users", UsersController.getAll)
  .get("/users/:id", UsersController.getOne)
  .post("/users", UsersController.create)
  .put("/users/:id", UsersController.editOne)
  .delete("/users/:id", UsersController.deleteOne)
  .delete("/users", UsersController.deleteAll)

  // Route '/favoris'
  .get("/favoris", FavorisController.getAll)
  .get("/favoris/:id", FavorisController.getOne)
  .post("/favoris", FavorisController.create)
  .put("/favoris/:id", FavorisController.editOne)
  .delete("/favoris/:id", FavorisController.deleteOne)
  .delete("/favoris", FavorisController.deleteAll)

// router.route('/fav')
// .get()

// router.route('/fav/:id')
// .get()

module.exports = router;
