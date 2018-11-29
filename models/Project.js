const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  userId: String,
  contact: String,
  officenumber: Number,
  callnumber: Number,
  email: String,
  skype: String,
  notes: String,
  noshootdays: Number,
  inssurancerate: Number,
  markup: Number
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
