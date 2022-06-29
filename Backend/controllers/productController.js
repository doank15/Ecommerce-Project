const Product = require("../models/productModel");
const catchAsync = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../untils/errorHandler");
// Create product --Admin
exports.createNewProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});
// Get all the products
exports.getAllProducts = catchAsync(async (req, res, next) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
});

// Get Product Details
exports.getProductById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

// Update product details -- Admin
exports.updateProductByID = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  let product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 404));
  }
  product = await Product.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    success: true,
    product,
  });
});

// Delete a product --Admin
exports.deleteProductById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (!product) {
    return next(new ErrorHandler("Product Not Found", 500));
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});
