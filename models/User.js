const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String
});

module.exports = User = mongoose.model("users", UserSchema);
