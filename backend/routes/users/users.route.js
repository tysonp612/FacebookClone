const express = require("express");
const router = express.Router();

const test = () => {
  console.log("user route test");
};
router.get("/user", test);
module.exports = router;
