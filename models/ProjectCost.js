const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectCost = new Schema({
  project: String,
  baseproductioncost: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  scouting: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  casting: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  crewsalaries: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  lightingequipment: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  cameraditvtequipment: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  gripequipment: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  soundequipment: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  artsfxstunts: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  transportation: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  accomodationtravel: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  filstockprocessing: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  extracosts: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  },
  talentfees: {
    rand: Number,
    euro: Number,
    euromarkup: Number
  }
});

module.exports = ProjectCost;
