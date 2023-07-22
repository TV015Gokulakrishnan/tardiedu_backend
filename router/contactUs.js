const express = require("express");
const router = express.Router();
const controller = require("../controller/contactus");

router.post("/", controller.contactUs);

module.exports = router;
