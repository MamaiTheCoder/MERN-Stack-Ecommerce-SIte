const app = require("./app");
const dotenv = require("dotenv");

const connectDatabse = require("./config/database");

// setting up  config file
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabse();

app.listen(process.env.PORT, () => {
  console.log(
    `Server started at http://127.0.0.1:${process.env.PORT} in ${process.env.NODE_ENV}`,
  );
});
