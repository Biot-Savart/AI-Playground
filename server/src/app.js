const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./api/routes");

const app = express();

app.use(express.json());
app.use(cors());

// Bind routes
app.use("/api", routes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).send("Server Error");
});

module.exports = app;
