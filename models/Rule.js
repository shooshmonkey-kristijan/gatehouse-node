const mongoose = require('mongoose');
const version = require('mongoose-version');
const Schema = mongoose.Schema;

const RuleSchema = new Schema({
  id: String,
  cid: String,
  name: String,
  durationunits: String,
  traveldaysx: Number,
  preshootx: Number,
  shootx: Number,
  postshootx: Number,
  overtime1x: Number,
  overtime2x: Number,
  timestamp: Date,
});
RuleSchema.plugin(version, { collection: 'Rule__versions' });
module.exports = Rule = mongoose.model('rules', RuleSchema);
