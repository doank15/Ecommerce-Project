const app = require("./app");
const connectDB = require("./config/db")


const dotenv = require("dotenv");
//config
dotenv.config({path: "backend/config/config.env"});
// DB
connectDB();

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on Port ${process.env.PORT}`);
})