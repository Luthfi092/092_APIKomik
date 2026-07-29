require("dotenv").config();

const development = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST || "127.0.0.1",
  port: process.env.DB_PORT || 5432,
  dialect: process.env.DB_DIALECT || "postgres", // 👈 Tambahkan || "postgres"
};

module.exports = { development };