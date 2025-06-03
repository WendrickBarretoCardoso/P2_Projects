const express = require("express");
const router = express.Router();
const aircraftController = require("../Controller/aircraftController");

router.get("/", aircraftController.getAllAircrafts);

module.exports = router;