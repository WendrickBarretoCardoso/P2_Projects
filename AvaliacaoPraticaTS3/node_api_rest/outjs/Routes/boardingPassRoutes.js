"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const boardingPassController = require("../Controller/boardingPassController");
router.get("/", boardingPassController.getAllBoardingPasses);
router.get("/:id", boardingPassController.getgetBoardingPassById);
module.exports = router;
//# sourceMappingURL=boardingPassRoutes.js.map