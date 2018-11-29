const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BudgetedCostsSchema = new Schema({
  id: String,
  rands: Number,
  euro: Number,
  euromarkup: Number
});

module.exports = BudgetedCosts = mongoose.model(
  "budgetedcosts",
  BudgetedCostsSchema
);
