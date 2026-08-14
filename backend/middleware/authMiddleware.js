const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try{
    const token = req.cookies.accessToken;
  if (!token) {
    res.status(401).json({
      message: "Not authenticated",
      status: false,
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_KEY);
  console.log("decoded :", decoded);
  if (!decoded) {
    res.status(401).json({
      message: "Invalid Token",
      status: false,
    });
  }
  req.user = decoded;

  next();
  }catch(err){
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};


module.exports = authMiddleware;