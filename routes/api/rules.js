const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

// POST api/rules
// router.post("/:id", (req, res) => {
//   const itemId = req.params.id;
//   Item.findOne({ _id: itemId, hasqty: true }).then(item => {
//     Item.update({
//       name: req.body.name,
//       qty: req.body.qty,
//       qtyutil: req.body.qtyutil
//     });
//   });
// });

module.exports = router;
