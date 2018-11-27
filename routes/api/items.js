const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

const {
  calculateCost,
  calculateCrewSalaries
} = require("../../utils/calculateCosts");

// GET api/items
router.get("/", (req, res) => {
  Item.find({})
    .then(items => res.json(items))
    .catch(err =>
      res.status(404).json({
        itemsnotfound: "No Items Found"
      })
    );
});

// POST api/items
router.post("/", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    units: req.body.units,
    itemcost: req.body.itemcost,
    duration: req.body.duration,
    traveldays: req.body.traveldays,
    preshoot: req.body.preshoot,
    shoot: req.body.shoot,
    postshoot: req.body.postshoot,
    parent: req.body.parent,
    turnAround: req.body.turnAround,
    oT1X: req.body.oT1X,
    oT2X: req.body.oT2X,
    utilisation: req.body.utilisation,
    rate: req.body.rate
  });
  let calculatedCost = await calculateCost(
    req.body.itemcost,
    req.body.units,
    req.body.utilisation
  );

  let calculatedCrewSalaries = await calculateCrewSalaries(
    req.body.units,
    req.body.rate,
    req.body.traveldays,
    req.body.preshoot,
    req.body.shoot,
    req.body.postshoot,
    req.body.turnAround,
    req.body.oT1X,
    req.body.oT2X
  );

  res.json({ calculatedCrewSalaries, calculatedCost });

  //console.log("cost", cost);

  return;
  newItem
    .save()
    .then(item => res.json(item))
    .catch(err =>
      res.json({
        itemnotadded: "Item Not Added"
      })
    );
});

// DELETE api/items/:id
router.delete("/:id", (req, res) => {
  Item.findOne({ item: req.item.id }).then(item => {
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.json({
          deleteitemerror: "Item was not deleted"
        })
      );
  });
});

router.post("/new", (req, res) => {
  Item.update({ time: true }).then(item => {
    res.json(item);
  });
});

module.exports = router;
