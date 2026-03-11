const mongoose = require("mongoose");

const LandDocumentSchema = new mongoose.Schema({
  landId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Land"
  },
  titleCertificate: String,
  indenture: String,
  sitePlan: String,
  trusteeSigned: Boolean,
  depositedAtConference: Boolean
});

module.exports = mongoose.model("LandDocument", LandDocumentSchema);