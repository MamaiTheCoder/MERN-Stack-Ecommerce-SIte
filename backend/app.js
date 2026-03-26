const express = require("express");

const products = require("./routes/product.route");

const errorMiddleware = require("./middlewares/errors");
const app = express();

app.use(express.json());
app.use("/api/v1", products);

app.use(errorMiddleware);

module.exports = app;
