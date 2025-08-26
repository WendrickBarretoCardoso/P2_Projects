"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const aircraftController = require("../Controller/aircraftController");
router.get("/", aircraftController.getAllAircrafts);
router.get("/:id", aircraftController.getAircraftsById);
module.exports = router;
//# sourceMappingURL=aircraftRoutes.js.map