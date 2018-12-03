const mongoose = require('mongoose');
const version = require('mongoose-version');
const Schema = mongoose.Schema;

const CrewSchema = new Schema({
  id: String,
  name: String,
  itemCost: Number,
  qty: Number,
  qtyutil: Number,
  duration: Number,
  travelDays: Number,
  preShoot: Number,
  shoot: Number,
  postShoot: Number,
  parentId: String,
  timestamp: Date,
});
CrewSchema.plugin(version, { collection: 'Crew__versions' });

module.exports = Crew = mongoose.model('crew', CrewSchema);
