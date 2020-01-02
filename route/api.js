const express = require("express");
const router = express.Router();

router.use("/cities", require("./city.api"));

module.exports = router;