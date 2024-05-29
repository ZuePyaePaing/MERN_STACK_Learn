const mongodb = require("mongodb");
const { getDatabase } = require("../utils/database");

class Post {
  constructor(title, description, imgUrl) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  create() {
    const db = getDatabase();
    return db
      .collection("posts")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
  static getPosts() {
    const db = getDatabase();
    return db
      .collection("posts")
      .find()
      .toArray()
      .then((posts) => {
        console.log(posts);
        return posts;
      })
      .catch((err) => console.log(err));
  }

  static getSinglePost(id) {
    const db = getDatabase();
    return db.findById(mongodb.ObjectId(id));
  }
}

module.exports = Post;
