const express = require("express");
const router = express.Router();
const controllers = require("../controllers/post");

router.get("/create-post", controllers.renderCreatePage);

router.post("/", controllers.createPost);

module.exports = router;
