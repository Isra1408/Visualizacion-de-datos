const { db } = require("../config/db");
const { DataTypes } = require("sequelize");

const charts = db.define("apples", {
  mes: { type: DataTypes.STRING },
  cantidad: { type: DataTypes.INTEGER },
});

module.exports = { charts };
