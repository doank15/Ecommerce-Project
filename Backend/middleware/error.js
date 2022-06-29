const ErrorHandler = require("../untils/errorHandler");

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Internal Server Error";
    // Lets handle some MongoDB error
    if(error.name === "CastError") {
        const message = `Resource Not Found. Invalid ${error.path}`;
        error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
        success: false,
        message: error.message
    })
}