const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// configure using environment variables (set in server/.env or env config)
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

let storage;

if (cloudName && apiKey && apiSecret && cloudName !== 'your_cloud_name') {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "estate_lands",
      allowed_formats: ["jpg", "jpeg", "png"],
      transformation: [{ width: 1200, crop: "limit" }],
    },
  });
} else {
  // Fallback to local storage if Cloudinary is not configured
  const path = require("path");
  const fs = require("fs");

  // Create uploads directory if it doesn't exist
  const uploadDir = path.join(__dirname, "../uploads");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
}

const uploadCloud = multer({ storage });

module.exports = uploadCloud;