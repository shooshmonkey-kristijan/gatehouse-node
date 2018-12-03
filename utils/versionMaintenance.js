const models = require('../models/models');
var moment = require('moment');
const clearVersions = function(SchemaName) {
  const Model = models[SchemaName].VersionedModel;

  if (Model === undefined) {
    console.log(SchemaName + ' is undefined');
    return null;
  }
  var now = new Date();
  var today = moment().startOf('day');
  var tomorrow = moment(today).endOf('day');

  Model.find({ modified: { $gte: today, $lt: tomorrow } })
    .then(items => {
      if (!items.length) {
        console.log('No Items Found');
        return;
      }
      console.log('items.length2', items.length);
      console.log('items', items);
      items.map(item => {
        console.log('item', item);
        let versions = item.versions
          .filter(version => {
            return sameDay(version.timestamp, now);
          })
          .map(version => {
            return version._id;
          });
        console.log('versions', versions);
        if (versions.length > 1) {
          versions.splice(-1, 1);
          Model.updateMany(
            { _id: item._id },
            { $pull: { versions: { _id: { $in: versions } } } },
            { multi: true },
          ).then(foundItem => {
            console.log('foundItem', foundItem);
          });
        }
      });
    })
    .catch(err => console.log('No Items Found', err));
};
function sameDay(d1, d2) {
  console.log(d1, d2);
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
module.exports = {
  clearVersions,
};
//clearVersions('Project__versions');
