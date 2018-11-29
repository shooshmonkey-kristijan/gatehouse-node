const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

const {
  calculateCost,
  calculateCrewSalaries
} = require("../../utils/calculateCosts");

// GET api/items/:id
router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  //console.log(req.params);
  Item.findOne({ id: projectId })
    .then(items => {
      res.json(items);
      //console.log(items);
    })
    .catch(err =>
      res.status(404).json({
        itemsnotfound: "No Items Found"
      })
    );
});

// POST api/items
router.post("/", async (req, res) => {
  const newItem = new Item({
    id: req.body.projectId,
    name: req.body.name,
    //hasqty: false,
    itemCost: req.body.itemCost,
    qty: req.body.qty,
    qtyutil: req.body.qtyutil
  });
  newItem
    .save()
    .then(item => {
      res.json(item);
    })
    .catch(err =>
      res.json({
        itemnotadded: "Item Not Added"
      })
    );
});

// DELETE api/items/:id
router.delete("/:id", (req, res) => {
  Item.findOne({ _id: req.params.id }).then(item => {
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

// router.post("/new", (req, res) => {
//   Item.update({ time: true }).then(item => {
//     res.json(item);
//   });
// });

module.exports = router;
