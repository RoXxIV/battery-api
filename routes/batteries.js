// routes/batteries.js
const express = require("express");
const router = express.Router();
const { getAllBatteries } = require("../controllers/batteryController");

router.get("/", getAllBatteries);

module.exports = router;
