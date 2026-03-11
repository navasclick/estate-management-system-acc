const mongoose = require("mongoose");

const AuditSchema = new mongoose.Schema({

 userId:String,
 action:String,
 recordType:String,
 recordId:String,
 date:{
  type:Date,
  default:Date.now
 }

});

module.exports = mongoose.model("AuditLog",AuditSchema);