const express = require("express");
const router = express.Router();
const { getAllBatteries } = require("../controllers/batteryController");
const apiKeyAuth = require("../middlewares/auth");
router.get("/", apiKeyAuth, getAllBatteries);

module.exports = router;
