const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use("/api/v1", productRoutes);




module.exports = app;