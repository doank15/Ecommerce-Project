const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.route("/register").post(userController.RegisterUser);

module.exports = router;
