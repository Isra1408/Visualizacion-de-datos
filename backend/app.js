const express = require("express");
const cors = require("cors");
const { router } = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use("/", router);

module.exports = { app };
