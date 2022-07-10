const User = require("../models/userModel");
const ErrorHandler = require("../untils/errorHandler");
const catchAsync = require("../middleware/catchAsyncErrors");
const sendToken = require("../untils/jwtToken");

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
   sendToken(user, 201, res);
})


//Login
exports.Login = catchAsync(async(req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return next(ErrorHandler("Email or Password is Invalid!!!", 400));
    }
    const user = User.findOne({email}).select("+password");
    if(!user) {
        return next(ErrorHandler("Invalid email or password!!!",400));
    }
    const isPasswordMatched = user.comparedPassword(password);
    if(!isPasswordMatched) {
        return next(ErrorHandler("Email or Password is wrong!!!", 400));
    }
    const token = user.generateToken();
    res.status(200).json({
        success: true,
        token
    })
})

// Logout
exports.Logout = catchAsync(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    });
    res.status(200).json({
        success: true,
        message: "Logouted Successfully"
    })
})
