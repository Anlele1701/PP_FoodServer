const pool = require("../../db");
const ResponseClass = require("../models/ResponseClass");
var responseRes = new ResponseClass();
//
var createFood = async (body) => {
  const { name, price, description, image } = body;
  if (!image) {
    return false;
  }
  const imageBuffer = Buffer.from(image, "base64");
  try {
    const result = await pool.query(
      "INSERT INTO food (name, price, description, image) VALUES ($1, $2, $3, $4)",
      [name, price, description, imageBuffer]
    );
    return responseRes.success("Create Food Success", result.rows, 201);
  } catch (error) {
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
