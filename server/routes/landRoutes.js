const express = require("express");
const router = express.Router();
const Land = require("../models/Land");
const AuditLog = require("../models/AuditLog");
const uploadCloud = require("../middleware/cloudinary");

const { verifyToken } = require("../middleware/authMiddleware");

// create land with optional image upload
router.post("/add", verifyToken, uploadCloud.single("image"), async (req, res) => {
  try {
    // Take all body fields directly, additional validation can be added later
    const landData = { ...req.body };

    if (req.file && req.file.path) {
      landData.imageUrl = req.file.path;
    }

    const land = new Land(landData);
    await land.save();
    res.json(land);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  const lands = await Land.find().populate("churchId");
  res.json(lands);
});

// update land and record audit log
router.put("/update/:id", verifyToken, uploadCloud.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file && req.file.path) {
      updateData.imageUrl = req.file.path;
    }

    const land = await Land.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!land) return res.status(404).json({ message: "Land not found" });

    // create audit entry
    await AuditLog.create({
      userId: req.user.id,
      action: "Updated Land Record",
      recordType: "Land",
      recordId: land._id,
    });

    res.json(land);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;