const User = require("../models/userModel");
const createError = require("../utils/createError");

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const user = await User.findById(id);
    if (!user) {
      return next(createError(404, "User not found"))
    } 
    if(userId !== user._id.toString()) return next(createError(403,"You can delete only your account"))
    await User.findByIdAndDelete(id)
    res.status(200).json({
      message: "User deleted",
      status: true
    });
  } catch (err) {
    return next(err);
  }
};


module.exports = {
    deleteUser
}