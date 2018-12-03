const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const cron = require('cron');
const items = require('./routes/api/items');
const users = require('./routes/api/users');
const projects = require('./routes/api/projects');
const rules = require('./routes/api/rules');
const crew = require('./routes/api/crew');
const costs = require('./routes/api/costs');
const { clearVersions } = require('./utils/versionMaintenance');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/gatehouse').then(
  () => {
    console.log('mongodb connected');
  },
  err => {
    console.log(err);
  },
);

app.use(passport.initialize());
var cronJob = cron.job('0 0 22 * * *', async function() {
  console.log('cron running');
  clearVersions('Project');
  clearVersions('Rule');
  clearVersions('Item');
  clearVersions('Crew');
});
cronJob.start();
require('./config/passport')(passport);

app.use('/api/items', items);
app.use('/api/users', users);
app.use('/api/projects', projects);
app.use('/api/rules', rules);
app.use('/api/crew', crew);
app.use('/api/costs', costs);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
