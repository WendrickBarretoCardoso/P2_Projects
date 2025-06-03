const express = require("express");
const router = express.Router();
const boardingPassController = require("../Controller/boardingPassController");

router.get("/", boardingPassController.getAllBoardingPasses);

module.exports = router;