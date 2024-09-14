const ResponseClass = require("../models/ResponseClass");
var responseRes = new ResponseClass();
const fs = require("fs");
const { PrismaClient } = require("@prisma/client");
//
const prisma = new PrismaClient();
var createFood = async (req) => {
  BigInt.prototype["toJSON"] = function () {
    return this.toString();
  };
  const { name, price, description } = req.body;
  console.log(name, price, description);
  const image = req.file;
  if (!image) {
    return responseRes.error("Image is required", 400);
  }
  try {
    const filePath = req.file.path;
    const imageBuffer = fs.readFileSync(filePath);
    const result = await prisma.food.create({
      data: {
        name: name,
        price: price,
        description: description,
        image: imageBuffer,
      },
    });
    return responseRes.success("Create Food Success", result, 201);
  } catch (error) {
    return responseRes.error("Internal Server Error", 500);
  }
};

var getFood = async () => {
  BigInt.prototype["toJSON"] = function () {
    return this.toString();
  };
  try {
    const foodItems = await prisma.food.findMany();
    return responseRes.success("Get Food Success", foodItems, 200);
  } catch (error) {
    return responseRes.error("Internal Server Error", 500);
  }
};
var getFoodById = async (id) => {
  BigInt.prototype["toJSON"] = function () {
    return this.toString();
  };
  try {
    const foodItem = await prisma.food.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return responseRes.success("Get Food Success", foodItem, 200);
  } catch (error) {
    return responseRes.error("Internal Server Error", 500);
  }
};
module.exports = { getFood, createFood };
