const User = require("../models/userModel");
const ErrorHandler = require("../untils/errorHandler");
const catchAsync = require("../middleware/catchAsyncErrors");

//Register User
exports.RegisterUser = catchAsync(async(req, res, next)=> {
    const {name, email, password} = req.body;

    const user = await User.create({
        name, 
        email,
        password,
        avatar: {
            public_id: "This is a sample id",
            url: "profile pic url" 
        }
    })
    const token = User.getJWTTOken();
    res.status(200).json({
        success: true,
        token
    })
})

