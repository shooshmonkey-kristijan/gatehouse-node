const express = require('express');
const router = express.Router();

const Rule = require('../../models/Rule');

const {
  calculateCost,
  calculateRuleSalaries,
} = require('../../utils/calculateCosts');

// POST api/rules
router.post('/', async (req, res) => {
  const newRule = new Rule({
    id: req.body.id,
    cid: req.body.cid,
    name: req.body.name,
    durationunits: String,
    traveldaysx: Number,
    preshootx: Number,
    shootx: Number,
    postshootx: Number,
    overtime1x: Number,
    overtime2x: Number,
    timestamp: new Date(),
  });
  newRule
    .save()
    .then(rule => {
      res.json(rule);
    })
    .catch(err =>
      res.status(400).json({
        error: true,
        errorMsg: 'Rule Not Added',
      }),
    );
});

// GET api/rules/project/:id
router.get('/project/:id', (req, res) => {
  const projectId = req.params.id;
  //console.log(req.params);
  Rule.find({ id: projectId })
    .then(rules => {
      res.json(rules);
    })
    .catch(err =>
      res.status(404).json({
        error: true,
        errorMsg: 'No Rules Found',
      }),
    );
});
// GET api/rules/crew/:id
router.get('/crew/:id', (req, res) => {
  const crewId = req.params.id;
  //console.log(req.params);
  Rule.find({ cid: crewId })
    .then(rules => {
      res.json(rules);
    })
    .catch(err =>
      res.status(404).json({
        error: true,
        errorMsg: 'No Rules Found',
      }),
    );
});
// POST api/Rules
router.post('/update/:id', (req, res) => {
  const RuleId = req.params._id;

  Rule.findOne({ RuleId })
    .then(rule => {
      rule = Object.assign(rule, req.body);
      rule.timestamp = new Date();
      rule.save();
      res.json(rule);
    })
    .catch(err => {
      res.status(404).json({
        error: true,
        errorMsg: 'No Rule Found',
      });
    });
});

// DELETE api/Rules/:id
router.delete('/:id', (req, res) => {
  Rule.findOne({ _id: req.params.id }).then(rule => {
    rule
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.status(400).json({
          error: true,
          errorMsg: 'Rule was not deleted',
        }),
      );
  });
});

// router.post("/new", (req, res) => {
//   Rule.update({ time: true }).then(Rule => {
//     res.json(Rule);
//   });
// });

module.exports = router;
