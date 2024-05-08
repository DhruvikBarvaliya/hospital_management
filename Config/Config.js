require("dotenv").config();

const {
  PORT,
  JWT_SECRET_KEY,
  EMAIL_USER,
  EMAIL_PASSWORD,
  ENV,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT
} = process.env;

module.exports = {
  PORT,
  JWT_SECRET_KEY,
  EMAIL_USER,
  EMAIL_PASSWORD,
  ENV,
  HOST: DB_HOST,
  USER: DB_USER,
  PASSWORD: DB_PASSWORD,
  DB: DB_NAME,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
