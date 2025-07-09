const Battery = require("../models/Battery");

exports.getAllBatteries = async (req, res) => {
  try {
    const batteries = await Battery.find().sort({ TimestampExpedition: -1 });
    res.json(batteries);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
  const batteries = await Battery.find();
  console.log("📊 Documents trouvés:", batteries.length);
};
