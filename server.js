const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");

const items = require("./routes/api/items");
const users = require("./routes/api/users");
const projects = require("./routes/api/projects");
const rules = require("./routes/api/rules");
const costs = require("./routes/api/costs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/gatehouse").then(
  () => {
    console.log("mongodb connected");
  },
  err => {
    console.log(err);
  }
);

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/projects", projects);
app.use("/api/rules", rules);
app.use("/api/costs", costs);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
