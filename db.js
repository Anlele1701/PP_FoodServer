const { Pool } = require("pg");
require("dotenv").config();

const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD } =
  process.env;
const dbConfig = {
  host: POSTGRES_HOST,
  port: 6543,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
};
const pool = new Pool(dbConfig);
module.exports = pool;
