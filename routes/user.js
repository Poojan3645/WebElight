const express = require("express");
const router = express("Router");
const userController = require("../Controllers/userController");

router.post("/", userController.createUser);
router.post("/Login", userController.createLogins);
router.get("/", userController.getUser);
router.patch("/update", userController.getUpdateUser);
router.delete("/delete", userController.getDeleteUser);
router.get("/userById", userController.getUserById);

module.exports = router;