const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const users = mongoose.model("users", userSchema);

module.exports = users;
