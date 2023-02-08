const { charts } = require("../models/charts");

const getData = async (req, res, next) => {
  try {
    const user = await charts.findAll();
    return res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getData };
