const mongodb = require("mongodb");
require("dotenv").config();
const mongodbClient = mongodb.MongoClient;

let db;
const mongodbConnector = () => {
  mongodbClient
    .connect(process.env.MONGOODB_URL)
    .then((result) => {
      db = result.db();
      console.log("Connected to database");
      console.log(result);
    })
    .catch((err) => console.log(err));
};

const getDatabase = () => {
  if (db) {
    return db;
  }
  throw "No Database";
};
module.exports = { mongodbConnector, getDatabase };
