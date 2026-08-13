require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const authRoutes = require("./routes/authRoute");

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

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Request recieved !",
    status: true,
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on PORT - ${PORT}`);
});
