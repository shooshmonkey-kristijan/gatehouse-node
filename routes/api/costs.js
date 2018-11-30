const express = require("express");
const router = express.Router();

const { calculateCost } = require("../../utils/calculateCosts");

const BudgetedCost = require("../../models/BudgetedCosts");
const ActualCost = require("../../models/ActualCosts");
const OriginalCost = require("../../models/OriginalCosts");

//POST /api/costs
router.post("/", async (req, res) => {
  const itemId = req.body.itemId;

  let budgets = [];

  const newBudgetedCost = new BudgetedCost({
    id: itemId,
    rands: 0,
    euro: 0,
    euromarkup: 0
  });

  const newActualCost = new ActualCost({
    id: itemId,
    rands: 0,
    euro: 0,
    euromarkup: 0
  });

  const newOriginalCost = new OriginalCost({
    id: itemId,
    rands: 0,
    euro: 0,
    euromarkup: 0
  });

  newBudgetedCost
    .save()
    .then(itemBudgetCost => {
      budgets.push({ ItemBudgetCost: itemBudgetCost });
      newActualCost.save().then(itemActualCost => {
        budgets.push({ ItemActualCost: itemActualCost });
      });

      newOriginalCost.save().then(itemOriginalCost => {
        budgets.push({ ItemOriginalCost: itemOriginalCost });
      });

      res.json({ budgets });
    })
    .catch(err => {
      res.status(400).json({
        error: true,
        errorMsg: "Costs for item not added"
      });
    });
});

//GET /api/costs/:id
router.get("/:id", async (req, res) => {
  let budgets = [];
  let itemId = req.params.id;
  BudgetedCost.findOne({ id: itemId }).then(budgetCost => {
    budgets.push({ budgetCost: budgetCost });
    ActualCost.findOne({ id: itemId }).then(actualCost => {
      budgets.push({ ActualCost: actualCost });
    });

    OriginalCost.findOne({ id: itemId })
      .then(originalCost => {
        budgets.push({ OriginalCost: originalCost });
        res.json({ budgets });
      })
      .catch(err => {
        res.status(404).json({
          error: true,
          errorMsg: "Costs for item not found"
        });
      });
  });
});

module.exports = router;
