const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const LandDocument = require("../models/LandDocument");
const cloudinary = require("../config/cloudinary");
const nodemailer = require("nodemailer");

// configure transport – replace with env vars in production
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "youremail@gmail.com",
    pass: process.env.EMAIL_PASS || "yourpassword",
  },
});

router.post(
  "/upload",
  upload.fields([
    { name: "titleCertificate" },
    { name: "indenture" },
    { name: "sitePlan" }
  ]),
  async (req, res) => {
    try {
      // upload each file to Cloudinary and keep secure URLs
      const urls = {};
      const uploadFile = async (file) => {
        if (!file) return null;
        const result = await cloudinary.uploader.upload(file.path);
        return result.secure_url;
      };

      urls.titleCertificate = await uploadFile(req.files["titleCertificate"]?.[0]);
      urls.indenture = await uploadFile(req.files["indenture"]?.[0]);
      urls.sitePlan = await uploadFile(req.files["sitePlan"]?.[0]);

      const document = new LandDocument({
        landId: req.body.landId,
        titleCertificate: urls.titleCertificate,
        indenture: urls.indenture,
        sitePlan: urls.sitePlan,
        trusteeSigned: req.body.trusteeSigned,
        depositedAtConference: req.body.depositedAtConference,
      });

      await document.save();

      // send notification to admin
      transporter.sendMail({
        from: "estate system <no-reply@estate.com>",
        to: "admin@conference.com",
        subject: "New Land Document Uploaded",
        text: `A new document has been uploaded for land ${req.body.landId}`,
      }).catch((err) => {
        console.error("Email send error:", err);
      });

      res.json({ message: "Documents uploaded successfully" });

    } catch (error) {
      res.status(500).json(error);
    }
  }
);

router.get("/", async (req, res) => {
  const documents = await LandDocument.find().populate("landId");
  res.json(documents);
});

module.exports = router;