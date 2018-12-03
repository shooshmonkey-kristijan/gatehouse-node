const mongoose = require('mongoose');
const version = require('mongoose-version');
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
  markup: Number,
  timestamp: Date,
});
ProjectSchema.plugin(version, { collection: 'Project__versions' });
module.exports = Project = mongoose.model('projects', ProjectSchema);
