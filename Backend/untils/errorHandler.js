// make an errorhandler class which inherits the class Error from Node

class ErrorHandler extends Error {
    // Make a constructor 
    constructor(message, statusCode) {
        super(message); 
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler;