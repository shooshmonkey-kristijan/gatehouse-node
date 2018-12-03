const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

const {
  calculateCost,
  calculateCrewSalaries,
} = require('../../utils/calculateCosts');

// GET api/items/:id
router.get('/:id', (req, res) => {
  const projectId = req.params.id;
  //console.log(req.params);
  Item.find({ id: projectId })
    .then(items => {
      res.json(items);
      //console.log(items);
    })
    .catch(err =>
      res.status(404).json({
        error: true,
        errorMsg: 'No Items Found',
      }),
    );
});

// POST api/items
router.post('/', async (req, res) => {
  const newItem = new Item({
    id: req.body.id,
    name: req.body.name,
    //hasqty: false,
    itemCost: req.body.itemCost,
    qty: req.body.qty,
    qtyutil: req.body.qtyutil,
    parentId: req.body.parentId,
    timestamp: new Date(),
  });
  newItem
    .save()
    .then(item => {
      res.json(item);
    })
    .catch(err =>
      res.status(400).json({
        error: true,
        errorMsg: 'Item Not Added',
      }),
    );
});

// POST api/items
router.post('/update/:id', (req, res) => {
  const itemId = req.params._id;

  Item.findOne({ itemId })
    .then(item => {
      item = Object.assign(item, req.body);
      item.timestamp = new Date();
      item.save();
      res.json(item);
    })
    .catch(err => {
      res.status(404).json({
        error: true,
        errorMsg: 'No Item Found',
      });
    });
});

// DELETE api/items/:id
router.delete('/:id', (req, res) => {
  Item.findOne({ _id: req.params.id }).then(item => {
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.status(400).json({
          error: true,
          errorMsg: 'Item was not deleted',
        }),
      );
  });
});

// router.post("/new", (req, res) => {
//   Item.update({ time: true }).then(item => {
//     res.json(item);
//   });
// });

module.exports = router;
