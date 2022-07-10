const express = require("express");
const productController = require("../controllers/productController");
const { isAuthenticateUser } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(isAuthenticateUser,productController.getAllProducts);
router.route("/product/new").post(productController.createNewProduct);
router.route("/product/:id")
.put(productController.updateProductByID)
.delete(productController.deleteProductById)
.get(productController.getProductById)

module.exports = router;