const PDFDocument = require("pdfkit");
const Land = require("../models/Land");

router.get("/lands-report", async (req,res)=>{

 const lands = await Land.find();

 const doc = new PDFDocument();

 res.setHeader(
   "Content-Type",
   "application/pdf"
 );

 doc.pipe(res);

 doc.fontSize(20).text("Estate Land Report");

 lands.forEach(land=>{
   doc.text(`Church: ${land.churchName}`);
   doc.text(`Location: ${land.location}`);
   doc.text("-------------------");
 });

 doc.end();

});