const express = require("express");
const cookieParser = require("cookie-parser");

const products = require("./routes/product.route");
const auth = require("./routes/auth.route");

const errorMiddleware = require("./middlewares/errors");
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use("/api/v1", products);
app.use("/api/v1", auth);

app.use(errorMiddleware);

module.exports = app;
