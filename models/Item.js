const mongoose = require('mongoose');
const version = require('mongoose-version');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: String,
  name: String,
  //hasqty: Boolean,
  qty: Number,
  // occurence: Occurence,
  qtyutil: Number,
  itemCost: Number,
  parentId: String,
  timestamp: Date,
});
ItemSchema.plugin(version, { collection: 'Item__versions' });

module.exports = Item = mongoose.model('items', ItemSchema);
