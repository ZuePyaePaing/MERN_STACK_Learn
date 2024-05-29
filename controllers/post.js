const Post = require("../models/post");

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
  console.log(title, description, image);
  const post = new Post(title, description, image);
  post
    .create()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderCreatePage = (req, res) => {
  res.render("addPost", { title: "Create Page" });
};

exports.renderPostsPage = (req, res) => {
  res.render("home", { title: "Home Page" });
};
