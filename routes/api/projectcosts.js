const express = require("express");
const router = express.Router();

const ProjectCost = require("../../models/ProjectCost");

// GET api/projectcosts
router.get("/", (req, res) => {
  ProjectCost.find()
    .then(project => res.json(project))
    .catch(err =>
      res.status(404).json({
        projectnotfound: "No Projects Found"
      })
    );
});

// POST api/projectcosts
router.post("/", (req, res) => {
  const newProjectCost = new ProjectCost({
    project: req.body.project,
    baseproductioncost: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    scouting: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    casting: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    crewsalaries: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    lightingequipment: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    cameraditvtequipment: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    gripequipment: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    soundequipment: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    artsfxstunts: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    transportation: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    accomodationtravel: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    filstockprocessing: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    extracosts: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    },
    talentfees: {
      rand: req.body.rand,
      euro: req.body.euro,
      euromarkup: req.body.euromarkup
    }
  });
  newProjectCost
    .save()
    .then(projectCost => res.json(projectCost))
    .catch(err => {
      res.json({ projectcostnotadded: "Project Cost not added" });
    });
});

// DELETE api/projectcosts/:id
router.delete("/:id", (req, res) => {
  ProjectCost.findOne({ projectCost: req.projectCost.id }).then(projectCost => {
    projectCost
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.json({
          deleteprojectcosterror: "Project Cost was not deleted"
        })
      );
  });
});

module.exports = router;
