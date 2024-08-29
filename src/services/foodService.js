const pool = require("../../db");
const ResponseClass = require("../models/ResponseClass");
var responseRes = new ResponseClass();
const fs = require("fs");
//
var createFood = async (req) => {
  const { name, price, description } = req.body;
  console.log(name, price, description);
  // if (!image) {
  //   return new ResponseClass(false, "Image is required", null, 400);
  // }
  try {
    const filePath = req.file.path;
    const imageBuffer = fs.readFileSync(filePath);
    console.log(imageBuffer);
    // const result = await pool.query(
    //   "INSERT INTO food (name, price, description, image) VALUES ($1, $2, $3, $4)",
    //   [name, price, description, imageBuffer]
    // );
    // return responseRes.success("Create Food Success", result.rows, 201);
  } catch (error) {
    console.log(error);
    return responseRes.error("Internal Server Error", 500);
  }
};
var getFood = async () => {
  try {
    const result = await pool.query("SELECT * FROM food");
    return responseRes.success("Get Food Success", result.rows, 200);
  } catch (error) {
    responseRes.error("Internal Server Error", 500);
  }
};
module.exports = { getFood, createFood };
