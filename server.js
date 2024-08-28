const pool = require("./db");
const express = require("express");
const route = require("./routes");
const app = express();
const port = 3000;
const path = require("path");
//
app.listen(port, () => {
  pool
    .connect()
    .then(() => {
      console.log(`Connected to PostgreSQL database and running on ${port}`);
    })
    .catch((err) => {
      console.error("Failed to connect to PostgreSQL database", err);
    });
});
app.use("/images", express.static(path.join(__dirname, "/assets/foodImages")));
app.use(express.json());
app.use(route);
