const express = require("express");
const router = express.Router();

const Church = require("../models/Church");
const Land = require("../models/Land");
const LandDocument = require("../models/LandDocument");

router.get("/stats", async (req, res) => {

  try {

    const totalChurches = await Church.countDocuments();
    const totalLands = await Land.countDocuments();
    const totalDocuments = await LandDocument.countDocuments();

    const recentChurches = await Church.find().sort({ _id: -1 }).limit(5);

    res.json({
      totalChurches,
      totalLands,
      totalDocuments,
      recentChurches
    });

  } catch (error) {
    res.status(500).json(error);
  }

});

module.exports = router;