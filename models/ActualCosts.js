const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActualCostsSchema = new Schema({
  id: String,
  rands: Number,
  euro: Number,
  euromarkup: Number
});

module.exports = ActualCosts = mongoose.model("actualcosts", ActualCostsSchema);
