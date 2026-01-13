const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tracker",
  password: "your_password",
  port: 5432,
});

module.exports = pool;