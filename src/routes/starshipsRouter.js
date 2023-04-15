const router = require("express").Router();

const {
  getStarships,
  getStarshipById,
  postStarship,
  putStarship,
  deleteStarship,
} = require("../controllers/starshipsControllers.js");

router.get("/", getStarships);
router.get("/:id", getStarshipById);
router.post("/", postStarship);
router.put("/:id", putStarship);
router.delete("/:id", deleteStarship);

module.exports = router;
