const express = require("express");
const {
  getAllContacts,
  createContactEntry,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getAllContacts).post(createContactEntry);

module.exports = router;
