const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const errMiddleware = require("./middleware/error");
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use("/api/v1", productRoutes);
//using middleware
app.use(errMiddleware);



module.exports = app;
