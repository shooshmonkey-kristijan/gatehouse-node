const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: String,
  name: String,
  //hasqty: Boolean,
  qty: Number,
  // occurence: Occurence,
  qtyutil: Number,
  itemCost: Number,
  cost: {}
});

module.exports = Item = mongoose.model("items", ItemSchema);
