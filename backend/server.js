const app = require("./app");
const dotenv = require("dotenv");

const connectDatabse = require("./config/database");

// setting up  config file
dotenv.config({ path: "backend/config/config.env" });

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down server due to uncaught exceptions");
  process.exit();
});

// connecting to database
connectDatabse();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server started at http://127.0.0.1:${process.env.PORT} in ${process.env.NODE_ENV}`,
  );
});

// Handle unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`${err.message}`);
  console.log(`shutting down the server due to unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
