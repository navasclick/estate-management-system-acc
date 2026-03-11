const mongoose = require("mongoose");

const ChurchSchema = new mongoose.Schema({
  churchName: String,
  district: String,
  location: String,
  yearStarted: Number,
  monthStarted: String,
  churchStatus: String,
  postalAddress: String,
  phone1: String,
  phone2: String,
  email: String,
  website: String
});

module.exports = mongoose.model("Church", ChurchSchema);
