
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
      .collection('posts')
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  
  }
}

module.exports = Post;
