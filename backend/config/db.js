const Sequelize = require("sequelize");
const { config } = require("./config");

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: "mysql",
  define: { timestamps: false },
});

const connect = async () => {
  try {
    await db.authenticate();
    console.log("Database conected...");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

connect();

module.exports = { db };
