const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanyContact = new Schema({
  contact: String,
  officenumber: Number,
  cellnumber: Number,
  email: String,
  skype: String,
  notes: String
});

module.exports = CompanyContact;
