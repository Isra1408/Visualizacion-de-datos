require("dotenv").config({ path: "./.env" });

const config = {
  port: process.env.PORT_HOST || 3001,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
};

console.log(config);

module.exports = { config };
