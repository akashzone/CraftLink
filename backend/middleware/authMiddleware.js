const jwt = require("jsonwebtoken");
const createError = require("../utils/createError");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token) {
      return next(createError(401, "Not authenticated"));
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded;

    next();
  } catch (err) {
    next(createError(401, "Invalid or expired token"));
  }
};

module.exports = authMiddleware;
