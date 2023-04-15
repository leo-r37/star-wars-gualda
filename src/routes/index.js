const { Router } = require("express");
const router = Router();

const filmsRouter = require("./filmsRouter");
const planetsRouter = require("./planetsRouter");
// const starshipsRouter = require("./starshipsRouter");

router.use("/films", filmsRouter);
router.use("/planets", planetsRouter);
// router.use("/starships", starshipsRouter);

module.exports = router;
