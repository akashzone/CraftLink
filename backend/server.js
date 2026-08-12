require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;

// function to connect MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "Request recieved !",
    status: true,
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT - ${PORT}`);
});
