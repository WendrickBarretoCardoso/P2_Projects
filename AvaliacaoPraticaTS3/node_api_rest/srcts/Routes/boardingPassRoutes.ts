const express = require("express");
const router = express.Router();
const boardingPassController = require("../Controller/boardingPassController");

router.get("/", boardingPassController.getAllBoardingPasses);
router.get("/:id", boardingPassController.getgetBoardingPassById);

module.exports = router;