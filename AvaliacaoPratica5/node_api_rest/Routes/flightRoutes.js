const express = require("express");
const router = express.Router();
const flightController = require("../Controller/flightController");

router.get("/", flightController.getAllFlights);

module.exports = router;