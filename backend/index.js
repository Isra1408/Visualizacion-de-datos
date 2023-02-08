require("dotenv").config({ path: "./.env" });
require("./config/db.js");
const { app } = require("./app");
const { config } = require("./config/config");

const PORT = config.port || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
