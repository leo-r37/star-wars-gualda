const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((error) => {
    console.error("DB connection error: " + error);
  });

module.exports = mongoose;
