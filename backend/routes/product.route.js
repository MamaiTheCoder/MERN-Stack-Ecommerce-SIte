const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { isAuthenticatedUser } = require("../middlewares/auth");

router.route("/products").get(isAuthenticatedUser, getProducts);

router.route("/products").post(newProduct);
router.route("/products/:id").get(getProduct);
router.route("/admin/products/:id").put(updateProduct);
router.route("/admin/products/:id").delete(deleteProduct);

module.exports = router;
