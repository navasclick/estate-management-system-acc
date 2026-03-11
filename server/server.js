const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/estate-management')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// land-related endpoints moved to dedicated router
const landRoutes = require("./routes/landRoutes");
app.use("/api/lands", landRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/api/dashboard", dashboardRoutes);

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);