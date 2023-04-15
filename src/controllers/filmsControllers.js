const mongoose = require("mongoose");
const Film = require("../Models/Film");

const getFilms = async (req, res) => {
  try {
    const films = await Film.find({});
    return films
      ? res.send(films)
      : res.status(404).json({ error: "404 - Film not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid film ID" });

    const film = await Film.findById(id);

    return film
      ? res.send(film)
      : res.status(404).json({ error: "404 - Film not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const postFilm = async (req, res) => {
  try {
    const { title, director, release_date } = req.body;
    if (!title || !director || !release_date)
      throw Error("Missing required field");

    const film = new Film(req.body);
    await film.save();
    return res.status(201).send(`Film created with id: ${film._id}`);
  } catch (error) {
    if (error.message === "Missing required field") {
      return res.status(400).json({ message: "Missing required field" });
    } else {
      console.error(error);
      return res.status(500).json({
        message: "Something went wrong while creating the film",
        error,
      });
    }
  }
};

const putFilm = async (req, res) => {
  try {
    if (Object.keys(req.body).length === 0)
      return res.status(400).json({ error: "No data to update" });

    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid film ID" });

    const film = await Film.findByIdAndUpdate(id, req.body);
    const updatedFilm = await Film.findById(id);

    return film
      ? res.send(updatedFilm)
      : res.status(404).json({ error: "Film Not found" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidObjectId)
      return res.status(400).json({ message: "Invalid film ID" });

    const film = await Film.findByIdAndDelete(id);

    return film
      ? res.send(`Film with id ${film._id} removed successfully`)
      : res.status(404).json({ error: "Film Not found" });
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

module.exports = {
  getFilms,
  getFilmById,
  postFilm,
  putFilm,
  deleteFilm,
};
