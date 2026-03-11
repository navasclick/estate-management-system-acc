const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const Land = require("../models/Land");

router.get("/certificate/:id", async (req,res)=>{

 const land = await Land.findById(req.params.id);

 const doc = new PDFDocument();

 res.setHeader("Content-Type","application/pdf");

 doc.pipe(res);

 doc.fontSize(24).text("LAND OWNERSHIP CERTIFICATE",{align:"center"});

 doc.moveDown();

 doc.fontSize(14).text(`Church: ${land.churchName}`);
 doc.text(`Location: ${land.location}`);
 doc.text(`Land Size: ${land.size}`);
 doc.text(`Ownership Status: ${land.ownershipStatus}`);

 doc.moveDown();
 doc.text("Authorized by Estate Department");

 doc.end();

});

module.exports = router;