const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const register = async (req, res) => {
  console.log("req.body :", req.body);
  try {
    const { email, username, password, country } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash
    });
    await newUser.save();
    res.status(201).json({
      message: "Successfully created",
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
  try {
    const user = await User.findOne({
      email : req.body.email
    });
    if (!user) {
      res.status(404).json({
        message: "User not found.",
        status: false,
      });
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if(!isCorrect) return res.status(400).json({
      message : "Wrong password or email",
      status: false
    })

    const { password, ...info } = user._doc;
    res.status(200).json({
      message: "Successfully account fetched",
      info,
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
