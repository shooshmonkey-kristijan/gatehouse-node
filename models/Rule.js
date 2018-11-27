const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Rule = new Schema({
  durationunits: String,
  traveldaysx: Number,
  preshootx: Number,
  shootx: Number,
  postshootx: Number,
  overtime1x: Number,
  overtime2x: Number
});

module.exports = Rule;
