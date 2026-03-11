const mongoose = require("mongoose");

const LandSchema = new mongoose.Schema({
  churchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Church"
  },
  purpose: String,
  length: Number,
  width: Number,
  acreage: Number,
  acquisitionType: String,
  acquisitionDate: Date,
  leaseDuration: Number,
  expiryDate: Date,
  paidBy: String,
  imageUrl: String // optional link to an uploaded image/file
});

module.exports = mongoose.model("Land", LandSchema);