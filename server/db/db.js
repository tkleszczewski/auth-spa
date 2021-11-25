const mongoose = require("mongoose");

function connectMongoDb() {
  return mongoose.connect("mongodb://localhost:27017/spa-jwt");
}

module.exports = connectMongoDb;
