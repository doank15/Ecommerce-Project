const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const errMiddleware = require("./middleware/error");
const userRoutes = require("./routes/userRoutes");
const cookieParser = require("cookie-parser");



app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cookieParser());
// api for product
app.use("/api/v1", productRoutes);
//api for user
app.use("/api/v1", userRoutes);
//using middleware
app.use(errMiddleware);



module.exports = app;
