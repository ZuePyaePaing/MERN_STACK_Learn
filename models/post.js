const mongodb = require("mongodb");
const { getDatabase } = require("../utils/database");

class Post {
  constructor(title, description, imgUrl, id) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
    this._id = new mongodb.ObjectId(id);
  }

  create() {
    const db = getDatabase();

    if (this._id) {
      //Update Post
      return db
        .collection("posts")
        .updateOne({ _id: this._id }, { $set: this })
        .then((result) => console.log("Post updated:", result))
        .catch((err) => console.error("Error updating post:", err));
    } else {
      //Create post
      return db
        .collection("posts")
        .insertOne(this)
        .then((result) => console.log("Post created:", result))
        .catch((err) => console.error("Error creating post:", err));
    }
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
    return db
      .collection("posts")
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then((post) => {
        console.log(post);
        return post;
      })
      .catch((err) => console.log(err));
  }

  static dedletById(id) {
    const db = getDatabase();
    return db
      .collection("posts")
      .deleteOne({ _id: new mongodb.ObjectId(id) })
      .then((post) => console.log(post)).catch(err=> console.log(err));
  }
}

module.exports = Post;
