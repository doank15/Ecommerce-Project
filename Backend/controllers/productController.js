const Product = require("../models/productModel");

// Create product --Admin
exports.createNewProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  try {
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all the products
exports.getAllProducts = async (req, res, next) => {
  const product = await Product.find();
  try {
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Product Details
exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  try {
    if (!product) {
      throw new Error();
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update product details -- Admin
exports.updateProductByID = async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findById(id);
  try {
    if (!product) {
      throw new Error();
    }
    product = await Product.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a product --Admin
exports.deleteProductById = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  try {
    if (!product) {
      throw new Error();
    }
    await product.remove();
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
