const fs = require("fs");
const Film = require("../Models/Film");

const dataLoader = async () => {
  fs.readFile("./collections/films.json", "utf8", (err, data) => {
    if (err) throw err;

    const films = JSON.parse(data);

    Film.insertMany(films, function (err) {
      if (err) throw err;
      console.log("Films created:", films);
    });
  });
};

module.exports = dataLoader;
