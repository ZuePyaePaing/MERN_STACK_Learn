const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/posts");
const adminRoute = require("./routes/admin");

const port = process.env.PORT || 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static file define
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use("/admin", (req, res, next) => {
  console.log("Admin approved");
  next();
});

app.use("/posts", (req, res, next) => {
  console.log("Post Routes pass");
  next();
});

app.use(router);
app.use("/admin", adminRoute);

app.listen(port, () => {
  console.log(`Server running on http://loaclhost:${port}`);
});
