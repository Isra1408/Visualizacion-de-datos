const express = require("express");
const { getData } = require("../controllers/chart.controller");
const router = express.Router();

router.get("/api", getData);

module.exports = { router };
