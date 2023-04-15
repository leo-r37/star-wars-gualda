const router = require("express").Router();

const {
  getPlanets,
  getPlanetById,
  postPlanet,
  putPlanet,
  deletePlanet,
} = require("../controllers/planetsControllers.js");

router.get("/", getPlanets);
router.get("/:id", getPlanetById);
router.post("/", postPlanet);
router.put("/:id", putPlanet);
router.delete("/:id", deletePlanet);

module.exports = router;
