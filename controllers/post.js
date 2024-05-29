const Post = require("../models/post");

exports.createPost = (req, res) => {
  const { title, description, image } = req.body;
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
  Post.getPosts()
    .then((posts) => {
      res.render("home", { title: "Home Page", posts });
    })
    .catch((err) => console.log(err));
};

exports.renderPostDatail = (req, res) => {
  const { id } = req.params;
  Post.getSinglePost(id)
    .then((post) => res.render("detailPost", { title: "Detail Page", post }))
    .catch((err) => console.log(err));
};

exports.getEditPost = (req, res) => {
  const { id } = req.params;
  Post.getSinglePost(id)
    .then((post) => {
      if (!post) {
        return res.redirect("/");
      }
      console.log("edit post", post);
      res.render("editPost", { title: "Edit Post", post });
    })
    .catch((err) => console.log(err));
};

exports.updatePost = (req, res) => {
  const { id, title, description, imgUrl } = req.body;
  const post = new Post(title, description, imgUrl, id);
  post
    .create()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deletePost = (req, res) => {
  const { id } = req.params;
  Post.dedletById(id)
    .then((post) => {
      console.log(post);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
