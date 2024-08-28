const express = require("express");
const router = express.Router();
const foodController = require("./src/controllers/foodController");
//CRUD Food
router
  .route("/food")
  .get(foodController.getFood)
  .post(foodController.createFood);
module.exports = router;
