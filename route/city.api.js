const express = require("express");
const router = express.Router();

const CityController = require("../controller/city.controller");

const cityController = new CityController();
cityController.register(router);

module.exports = router;