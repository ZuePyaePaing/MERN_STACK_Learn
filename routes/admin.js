const express = require("express");
const router = express.Router();

router.get("/create-post", (req, res) => {
  res.render("addPost", { title: "Post Create Page" });
});
module.exports = router;
