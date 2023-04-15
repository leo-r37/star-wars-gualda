const mongoose = require("mongoose");
const Starship = require("../Models/Starship");

const getStarships = async (req, res) => {
  try {
    const starships = await Starship.find({});
    return starships
      ? res.send(starships)
      : res.status(404).json({ error: "404 - Starship not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getStarshipById = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid starship ID" });

    const starship = await Starship.findById(id);

    return starship
      ? res.send(starship)
      : res.status(404).json({ error: "404 - Starship not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const postStarship = async (req, res) => {
  try {
    const { name, model } = req.body;
    if (!name || !model) throw Error("Missing required field");

    const starship = new Starship(req.body);
    await starship.save();
    return res.status(201).send(`Starship created with id: ${starship._id}`);
  } catch (error) {
    if (error.message === "Missing required field") {
      return res.status(400).json({ message: "Missing required field" });
    } else {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong while creating the starship",
        error,
      });
    }
  }
};

const putStarship = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ error: "No data to update" });

    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid starship ID" });

    const starship = await Starship.findByIdAndUpdate(id, req.body);
    const updatedStarship = await Starship.findById(id);

    return starship
      ? res.send(updatedStarship)
      : res.status(404).json({ error: "Starship Not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteStarship = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid starship ID" });

    const starship = await Starship.findByIdAndDelete(id);

    return starship
      ? res.send(`Starship with id ${starship._id} removed successfully`)
      : res.status(404).json({ error: "Starship Not found" });
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

module.exports = {
  getStarships,
  getStarshipById,
  postStarship,
  putStarship,
  deleteStarship,
};
