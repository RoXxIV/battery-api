const mongoose = require("mongoose");

const BatterySchema = new mongoose.Schema(
  {
    NumeroSerie: String,
    CodeAleatoireQR: String,
    TimestampExpedition: Date,
    TimestampImpression: Date,
    TimestampTestDone: Date,
    version: String,
    score: Number,
  },
  { timestamps: true }
);

// FORCER le nom de la collection ici !
module.exports = mongoose.model("Battery", BatterySchema, "printed_serial");
