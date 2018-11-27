const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const items = require("./routes/api/items");
const rules = require("./routes/api/rules");
const companycontacts = require("./routes/api/companycontacts");
const projectcosts = require("./routes/api/projectcosts");
const users = require("./routes/api/users");

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
app.use("/api/rules", rules);
app.use("/api/companycontacts", companycontacts);
app.use("/api/projectcosts", projectcosts);
app.use("/api/users", users);

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Server running on port ${port}`));
