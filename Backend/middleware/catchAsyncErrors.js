// Error Handler the async 
module.exports = (thefunc) => (req, res, next) => {
    Promise.resolve(thefunc(req, res, next)).catch(next);
}