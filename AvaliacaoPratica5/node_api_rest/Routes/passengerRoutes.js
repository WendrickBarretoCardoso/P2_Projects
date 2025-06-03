const express = require("express");
const router = express.Router();
const passengerController = require("../Controller/passengerController");

router.get("/", passengerController.getAllPassengers);

module.exports = router;