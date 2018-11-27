const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  units: Number,
  costrate: Number,
  duration: String,
  traveldays: Number,
  preshoot: Number,
  shoot: String,
  postshoot: Number,
  parent: String
});

module.exports = Item = mongoose.model("items", ItemSchema);
