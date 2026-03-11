const express = require("express");
const router = express.Router();
const Church = require("../models/Church");

const {
  verifyToken,
  requireAdmin,
  requireOwnChurch,
} = require("../middleware/authMiddleware");

router.post("/add", async (req, res) => {
  try {
    const church = new Church(req.body);
    await church.save();
    res.json(church);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", verifyToken, requireAdmin, async (req, res) => {
  const churches = await Church.find();
  res.json(churches);
});

// search by name – admins only
router.get("/search", verifyToken, requireAdmin, async (req, res) => {
  const keyword = req.query.keyword;
  const churches = await Church.find({
    churchName: { $regex: keyword, $options: "i" },
  });
  res.json(churches);
});

module.exports = router;