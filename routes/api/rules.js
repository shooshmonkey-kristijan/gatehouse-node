const express = require("express");
const router = express.Router();

const Rule = require("../../models/Rule");

// GET api/rules
router.get("/", (req, res) => {
  Rule.find()
    .then(rules => res.json(rules))
    .catch(err => {
      res.status(404).json({
        rulesnotfound: "No Rules Found"
      });
    });
});

// Post api/rules
router.post("/", (req, res) => {
  const newRule = new Rule({
    durationunits: req.body.durationunits,
    traveldaysx: req.body.traveldaysx,
    preshootx: req.body.preshootx,
    shootx: req.body.shootx,
    postshootx: req.body.postshootx,
    overtime1x: req.body.overtime1x,
    overtime2X: req.body.overtime2X
  });
  // Rules affects items
  newRule
    .save()
    .then(rule => res.json(rule))
    .catch(err =>
      res.json({
        rulenotadded: "Rule Not Added"
      })
    );
});

// DELETE api/rules/:id
router.delete("/:id", (req, res) => {
  Rule.findOne({ rule: req.rule.id }).then(rule => {
    rule
      .remove()
      .then(() =>
        res.json({
          success: true
        })
      )
      .catch(err => {
        res.json({
          deleteruleerror: "Rule was not deleted"
        });
      });
  });
});

module.exports = router;
