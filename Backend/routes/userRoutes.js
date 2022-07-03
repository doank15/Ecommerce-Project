const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.route("/register").post(userController.RegisterUser);
router.route("/login").post(userController.Login);


module.exports = router;
