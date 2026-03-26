const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then((con) => {
      console.log(`MongoDB connected with host ${con.connection.host}`);
    })
    .catch((err) => {
      console.error(err.message);
      process.exit();
    });
};

module.exports = connectDatabase;
