const Product = require("../models/product.model");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const APIFeatures = require("../utils/apiFeatures");
const { isAuthenticatedUser } = require("../middlewares/auth");

exports.newProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get all products
exports.getProducts = catchAsyncErrors(async (req, res, next) => {
  const resPerPage = 4;

  const productCount = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const products = await apiFeatures.query;

  res.status(200).json({
    success: true,
    count: products.length,
    productCount,
    products,
  });
});

// Get a single product details
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Update Product
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete product
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const productToDelete = await Product.findByIdAndDelete(req.params.id);

  if (!productToDelete) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
