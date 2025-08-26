"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const flightController = require("../Controller/flightController");
router.get("/", flightController.getAllFlights);
router.get("/:id", flightController.getFlightById);
module.exports = router;
//# sourceMappingURL=flightRoutes.js.map