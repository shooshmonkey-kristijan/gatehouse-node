const express = require('express');
const router = express.Router();
const { clearVersions } = require('../../utils/versionMaintenance');

const Project = require('../../models/Project');

// GET api/projects
// router.get("/", (req, res) => {
//   Project.find({})
//     .then(projects => res.json(projects))
//     .catch(err =>
//       res.status(404).json({
//         projectsnotfound: "No Projects Found"
//       })
//     );
// });

// POST api/projects
router.post('/', (req, res) => {
  const newProject = new Project({
    userId: req.body.userId,
    contact: req.body.contact,
    officenumber: req.body.officenumber,
    callnumber: req.body.callnumber,
    email: req.body.email,
    skype: req.body.skype,
    notes: req.body.notes,
    noshootdays: req.body.noshootdays,
    inssurancerate: req.body.inssurancerate,
    markup: req.body.markup,
    timestamp: new Date(),
  });

  newProject
    .save()
    .then(project => res.json(project))
    .catch(err =>
      res.status(400).json({
        error: true,
        errorMsg: 'Project Not Added',
      }),
    );
});

// POST api/projects
router.post('/update/:id', (req, res) => {
  const projectId = req.params._id;

  Project.findOne({ projectId })
    .then(project => {
      project = Object.assign(project, req.body);
      project.timestamp = new Date();
      project.save();
      res.json(project);
    })
    .catch(err => {
      res.status(404).json({
        error: true,
        errorMsg: 'No Projects Found',
      });
    });
});

// GET api/projects/project
router.get('/project/:id', (req, res) => {
  const projectId = req.params._id;
  //console.log(projectId);
  Project.findOne({ projectId })
    .then(project => res.json(project))
    .catch(err => {
      res.status(404).json({
        error: true,
        errorMsg: 'No Projects Found',
      });
    });
});
// GET api/projects by Project(userId)
router.get('/maintainprojects/all', (req, res) => {
  res.send('working');
  clearVersions('Project');
});
// GET api/projects by Project(userId)
router.get('/:id', (req, res) => {
  //console.log(req.params.id);
  const userId = req.params.id;
  Project.find({ userId })
    .then(project => res.json(project))
    .catch(err =>
      res.status(404).json({
        error: true,
        errorMsg: 'No Project Found',
      }),
    );
});

// DELETE api/projects by Project(projectid)
router.delete('/:id', (req, res) => {
  const projectId = req.params.id;
  //console.log(projectId);
  Project.findOne({ projectId }).then(project => {
    // console.log(project);
    project
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => {
        res.status(400).json({
          error: true,
          errorMsg: 'Project was not deleted',
        });
      });
  });
});

module.exports = router;
