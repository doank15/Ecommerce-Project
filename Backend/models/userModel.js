const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Please Enter Your Name!"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have more than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validator: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String, 
        required: [true, "Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avatar: {
        public_id:{ 
            type: String, 
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    role: {
        type: String, 
        default: "user"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
})
// Hash password
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10); 
})

// Generate our token(JWT) 
userSchema.methods.generateToken = function() {
    return jwtToken.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

userSchema.methods.comparePassword = function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
}
module.exports = mongoose.model("User", userSchema);
