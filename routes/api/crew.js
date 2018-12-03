const express = require('express');
const router = express.Router();

const Crew = require('../../models/Crew');

const {
  calculateCost,
  calculateCrewSalaries,
} = require('../../utils/calculateCosts');

// POST api/crews
router.post('/', async (req, res) => {
  const newItem = new Crew({
    id: req.body.id,
    name: req.body.name,
    itemCost: req.body.itemCost,
    qty: req.body.qty,
    qtyutil: req.body.qtyutil,
    duration: req.body.duration,
    travelDays: req.body.travelDays,
    preShoot: req.body.preShoot,
    shoot: req.body.shoot,
    postShoot: req.body.postShoot,
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
        errorMsg: 'Item Member Not Added',
      }),
    );
});

// GET api/crews/:id
router.get('/:id', (req, res) => {
  const projectId = req.params.id;
  //console.log(req.params);
  Crew.find({ id: projectId })
    .then(crews => {
      res.json(crews);
    })
    .catch(err =>
      res.status(404).json({
        error: true,
        errorMsg: 'No Crew Members Found',
      }),
    );
});

// POST api/crews
router.post('/update/:id', (req, res) => {
  const crewId = req.params._id;

  Crew.findOne({ crewId })
    .then(crew => {
      crew = Object.assign(crew, req.body);
      crew.timestamp = new Date();
      crew.save();
      res.json(crew);
    })
    .catch(err => {
      res.status(404).json({
        error: true,
        errorMsg: 'No Crew Member Found',
      });
    });
});

// DELETE api/crews/:id
router.delete('/:id', (req, res) => {
  Crew.findOne({ _id: req.params.id }).then(item => {
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.status(400).json({
          error: true,
          errorMsg: 'Crew Member was not deleted',
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
