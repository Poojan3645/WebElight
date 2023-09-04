const express = require("express");
const router = express("Router");
const productController = require("../Controllers/productController");
const auth = require("../middlewares/auth");

router.get("/productById",auth, productController.getProductById);
router.get("/getProductByCategory", productController.getProductByCategoryId);
router.post("/", productController.createProduct);
router.get("/", productController.getProduct);
router.patch("/update", productController.getUpdateProduct);
router.delete("/delete", productController.getDeleteProduct);

module.exports = router;