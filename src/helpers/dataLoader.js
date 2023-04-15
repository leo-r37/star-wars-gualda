const fs = require("fs");
const Film = require("../Models/Film");

const dataLoader = async () => {
  fs.readFile("./collections/films.json", "utf8", (err, data) => {
    if (err) throw err;

    const films = JSON.parse(data);

    Film.insertMany(films).then(() => {
      console.log("Data loaded into DB successfully");
    });
  });
};

module.exports = dataLoader;
