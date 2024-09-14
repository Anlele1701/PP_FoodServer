var foodService = require("../services/foodService");
var createFood = async (req, res) => {
  try {
    const foodItem = await foodService.createFood(req);
    res.status(200).send(foodItem);
  } catch (error) {
    console.error(error);
  }
};
var getFood = async (req, res) => {
  try {
    const foodItems = await foodService.getFood();
    res.status(foodItems.code).send(foodItems);
  } catch (error) {
    console.error(error);
  }
};
var getFoodById = async (req, res) => {
  try {
    const foodItem = await foodService.getFoodById(req.params.id);
    res.status(foodItem.code).send(foodItem);
  } catch (error) {
    console.error(error);
  }
};
var updateFood = async (req, res) => {
  var foodItem = await foodService.updateFood(req.body);
  res.send(foodItem);
};
var deleteFood = async (req, res) => {
  var foodItem = await foodService.deleteFood(req.body);
  res.send(foodItem);
};

module.exports = { createFood, getFood, updateFood, deleteFood };
