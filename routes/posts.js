const express = require("express");
const controllers = require("../controllers/post");
const router = express.Router();

router.get("/", controllers.renderPostsPage);

router.get('/detail/:id',controllers.renderPostDatail)

module.exports = router;
