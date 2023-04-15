const mongoose = require("mongoose");
const Film = require("./Models/Film");
const dataLoader = require("./helpers/dataLoader");

const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully");
  })
  .then(async () => {
    const film = await Film.findOne({});
    if (film) console.log("There is already data in the DB");
    else dataLoader();
  })
  .catch((error) => {
    console.error("DB connection error: " + error);
  });

module.exports = mongoose;
