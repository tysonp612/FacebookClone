const express = require("express");
const router = express.Router();
const userController = require("./../../controllers/user.controller");
const test = () => {
  console.log("user route test");
};
router.route("/register").post(userController.userRegister);
router.route("/activate").post(userController.activateAccount);
module.exports = router;
