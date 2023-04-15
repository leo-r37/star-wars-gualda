const router = require("express").Router();

const {
  getFilms,
  getFilmById,
  postFilm,
  putFilm,
  deleteFilm,
} = require("../controllers/filmsControllers");

router.get("/", getFilms);
router.get("/:id", getFilmById);
router.post("/", postFilm);
router.put("/:id", putFilm);
router.delete("/:id", deleteFilm);

module.exports = router;
