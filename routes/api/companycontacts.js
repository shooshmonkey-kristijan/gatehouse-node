const express = require("express");
const router = express.Router();

const CompanyContact = require("../../models/CompanyContact");

// Get api/contacts
router.get("/", (req, res) => {
  CompanyContact.find()
    .then(contacts => res.json(contacts))
    .catch(err => {
      res.status(404).json({
        nocontactsfound: "No Contacts Found"
      });
    });
});

// POST api/contacts
router.post("/", (req, res) => {
  const companyContact = new CompanyContact({
    contact: req.body.contact,
    officenumber: req.body.officenumber,
    cellnumber: req.body.cellnumber,
    email: req.body.email,
    skype: req.body.skype,
    notes: req.body.notes
  });
  companyContact
    .save()
    .then(contact => res.json(contact))
    .catch(err =>
      res.json({
        contactnotadded: "Contact Not Added"
      })
    );
});

// DELETE api/contacts/:id
router.delete("/:id", (req, res) => {
  CompanyContact.findOne({ item: req.item.id }).then(contact => {
    contact
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.json({
          deleteitemerror: "Contact was not deleted"
        })
      );
  });
});

module.exports = router;
