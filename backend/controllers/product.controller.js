const Product = require("../models/product.model");

exports.newProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will show all products in the database",
  });
};
