const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Import model
const User = require("./users");

const PostsSchema = new Schema({
  title: {
    type: String,
  },

  author: {
    type: String,
  },

  content: {
    type: String,
  },

  likes: {
    type: Number,
    default: 0,
  },

  createdDateIso: {
    type: Date,
    default: new Date(),
  },

  createdDateTimestamp: {
    type: String
  },

  updatedDateTimestamp: {
    type: String,
  },

  isSuspend: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Posts", PostsSchema);
