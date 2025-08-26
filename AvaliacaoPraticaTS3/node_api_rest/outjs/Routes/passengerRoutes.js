"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const passengerController = require("../Controller/passengerController");
router.get("/", passengerController.getAllPassengers);
router.get("/:id", passengerController.getPassengerById);
module.exports = router;
//# sourceMappingURL=passengerRoutes.js.map