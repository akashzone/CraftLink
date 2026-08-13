
const User = require("../models/userModel");
const register = async (req, res) => {
  
  const { email, username, password, country } = req.body;
  try {
    const newUser = new User({
      email,
      userName: username,
      password,
      country,
    });
    await newUser.save();
    res.status(201).json({
      message: "Successfully acc created",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExist = await User.find({
      email,
    });
    if (!userExist) {
      res.status(500).json({
        message: "User not found, register first..",
        status: false,
      });
    }
    res.status(200).json({
      message: "Successfully acc fetched",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

module.exports = { register, login };
