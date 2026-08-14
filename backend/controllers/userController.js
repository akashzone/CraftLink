const User = require("../models/userModel");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    console.log("UserId : ", userId)
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        message: "User not found",
        status: false,
      });
    } 
    console.log("ID from DB -", user._id);
    if(userId !== user._id.toString()) return res.status(403).json({
        message: "You can delete only your account",
        status: false
    })
    await User.findByIdAndDelete(id)
    res.status(200).json({
      message: "User deleted",
      status: true
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      status: false
    });
  }
};


module.exports = {
    deleteUser
}