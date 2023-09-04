const express = require("express");
const router = express("Router");
const categoryController = require("../Controllers/categoryController");
const auth = require("../middlewares/auth");

router.post("/", categoryController.createCategory);
router.get("/",auth, categoryController.getAllCategory);
router.patch("/update", categoryController.getUpdateCategory);
router.delete("/delete", categoryController.getDeleteCategory);
router.get("/categoryById", categoryController.getCategoryById);

module.exports = router;