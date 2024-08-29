const express = require("express");
const router = express.Router();
const foodController = require("./src/controllers/foodController");
const multer = require("./middleware/upload");
//CRUD Food
router
  .route("/food")
  .get(foodController.getFood)
  .post(multer.single("image"), foodController.createFood);
router.route("/test").post(multer.single("image"), (req, res) => {
  console.log(req.file.buffer);
});
module.exports = router;
