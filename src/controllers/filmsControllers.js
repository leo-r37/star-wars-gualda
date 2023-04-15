const Film = require("../Models/Film");

const getFilms = async (req, res) => {
  try {
    return res.send("todas las peliculas");
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

const getFilmById = async (req, res) => {
  try {
    return res.send("solo una pelicula");
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

const postFilm = async (req, res) => {
  try {
    const film = new Film(req.body);
    await film.save();
    return res.status(201).send(`Film created with id: ${film._id}`);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong while creating the film" });
  }
};

const putFilm = async (req, res) => {
  try {
    return res.send("editando la pelicula");
  } catch (error) {
    return res.status(404).send("Error 404");
  }
};

const deleteFilm = async (req, res) => {
  try {
    return res.send("eliminando la pelicula");
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
