
const User = require("../models/userModel");

const createError = require("../utils/createError");
   //1:14
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  console.log("req.body :", req.body);
  try {
    const { email, username, password, country } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return next(createError(409,"User already exists"));
    }
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({
      message: "Successfully created",
      status: true,
    });
  } catch (error) {
    next(error)
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return next(createError(404,"Users not found"));
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400,"Wrong password or email"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY,
    );
    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        secure: true
      })
      .status(200)
      .json({
        message: "Successfully account fetched",
        info,
        status: true,
      });
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true
    });

    return res.status(200).json({
        message: "Logged out successfully",
        status: true
    });
};

module.exports = { register, login };
