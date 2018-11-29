const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OriginalCostsSchema = new Schema({
  id: String,
  rands: Number,
  euro: Number,
  euromarkup: Number
});

module.exports = OriginalCosts = mongoose.model(
  "originalcosts",
  OriginalCostsSchema
);
