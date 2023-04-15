const fs = require("fs");
const Film = require("../Models/Film");
const Planet = require("../Models/Planet");
const Starship = require("../Models/Starship");

const dataLoader = async () => {
  try {
    let films = [];
    let planets = [];
    let starships = [];

    const readFilms = new Promise((resolve, reject) => {
      fs.readFile("./collections/films.json", "utf8", (err, data) => {
        if (err) throw err;
        films = JSON.parse(data);
        resolve();
      });
    });

    const readPlanets = new Promise((resolve, reject) => {
      fs.readFile("./collections/planets.json", "utf8", (err, data) => {
        if (err) throw err;
        planets = JSON.parse(data);
        resolve();
      });
    });

    const readStarships = new Promise((resolve, reject) => {
      fs.readFile("./collections/starships.json", "utf8", (err, data) => {
        if (err) throw err;
        starships = JSON.parse(data);
        resolve();
      });
    });

    await Promise.all([readFilms, readPlanets, readStarships]);

    await Film.insertMany(films);
    await Planet.insertMany(planets);
    await Starship.insertMany(starships);

    console.log("Data loaded into DB successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dataLoader;
