const app = require("./app");
const connectDB = require("./config/db")


const dotenv = require("dotenv");
//config
dotenv.config({path: "backend/config/config.env"});
// DB
connectDB();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
})
// unhandled promise rejection 
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    server.close(() => {
        process.exit(1);
    })
})

// uncaughtException
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})