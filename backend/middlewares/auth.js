const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

// checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Login first to acces this resource", 401));
  }

  const decode = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decode.id);

  next();
});
