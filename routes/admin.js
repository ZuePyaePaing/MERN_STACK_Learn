const express = require("express");
const router = express.Router();
const controllers = require("../controllers/post");

router.get("/create-post", controllers.renderCreatePage);

router.post("/", controllers.createPost);

router.get("/edit/:id", controllers.getEditPost);

router.post("/edit-post", controllers.updatePost);

router.post("/delete/:id", controllers.deletePost);

module.exports = router;
