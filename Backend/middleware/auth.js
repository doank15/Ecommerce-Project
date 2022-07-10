const ErrorHandler = require('../untils/errorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
exports.isAuthenticateUser = catchAsyncErrors(async (req, res, next) => {
    const {token} = req.cookies;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET)
    if(!token) {
        return next(new ErrorHandler("Please Login to Access This Resource", 404));
    }
    req.user = await User.findById(decodedData.id);
    next();
})