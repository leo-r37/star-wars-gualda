const mongoose = require("mongoose");
const Planet = require("../Models/Planet");

const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find({});
    return planets
      ? res.send(planets)
      : res.status(404).json({ error: "404 - Planet not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getPlanetById = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid planet ID" });

    const planet = await Planet.findById(id);

    return planet
      ? res.send(planet)
      : res.status(404).json({ error: "404 - Planet not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const postPlanet = async (req, res) => {
  try {
    const { name, diameter, terrain } = req.body;
    if (!name || !diameter || !terrain) throw Error("Missing required field");

    const planet = new Planet(req.body);
    await planet.save();
    return res.status(201).send(`Planet created with id: ${planet._id}`);
  } catch (error) {
    if (error.message === "Missing required field") {
      return res.status(400).json({ message: "Missing required field" });
    } else {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong while creating the planet",
        error,
      });
    }
  }
};

const putPlanet = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ error: "No data to update" });

    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid planet ID" });

    const planet = await Planet.findByIdAndUpdate(id, req.body);
    const updatedPlanet = await Planet.findById(id);

    return planet
      ? res.send(updatedPlanet)
      : res.status(404).json({ error: "Planet Not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deletePlanet = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid planet ID" });

    const planet = await Planet.findByIdAndDelete(id);

    return planet
      ? res.send(`Planet with id ${planet._id} removed successfully`)
      : res.status(404).json({ error: "Planet Not found" });
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

module.exports = {
  getPlanets,
  getPlanetById,
  postPlanet,
  putPlanet,
  deletePlanet,
};
