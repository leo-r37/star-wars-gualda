const router = require("express").Router();

const {
  getPlanets,
  getPlanetById,
  postPlanet,
  putPlanet,
  deletePlanet,
} = require("../controllers/planetsControllers.js");

/**
 * @swagger
 * tags:
 *   - name: Planets
 *     description: Operations related to planets
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Planet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         rotation_period:
 *           type: number
 *         orbital_period:
 *           type: number
 *         diameter:
 *           type: number
 *         climate:
 *           type: string
 *         gravity:
 *           type: string
 *         terrain:
 *           type: string
 *         surface_water:
 *           type: string
 *         population:
 *           type: string
 *         created:
 *           type: string
 *         edited:
 *           type: string
 *       required:
 *         - name
 *         - diameter
 *         - terrain
 */

/**
 * @swagger
 * /planets/:
 *   get:
 *     tags:
 *       - Planets
 *     summary: Get all planets.
 *     description: Get all existing planets.
 *     responses:
 *       200:
 *         description: OK. Returns an array of planets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Planet'
 *       404:
 *         description: Not Found. No planets found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error. Failed to get planets.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", getPlanets);

/**
 * @swagger
 * /planets/{id}:
 *   get:
 *     tags:
 *       - Planets
 *     summary: Get planet by ID.
 *     description: Get an existing planet by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           description: ID of the planet.
 *         required: true
 *         example: "60b10f900c8f732732fb59de"
 *     responses:
 *       200:
 *         description: OK. Returns the planet with the specified ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Planet'
 *       404:
 *         description: Not Found. Planet not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal Server Error. Failed to get planet.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", getPlanetById);

/**
 * @swagger
 * /planets:
 *   post:
 *     tags:
 *       - Planets
 *     summary: Create a new planet.
 *     description: Create a new planet with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               diameter:
 *                 type: number
 *               terrain:
 *                 type: string
 *               rotation_period:
 *                 type: number
 *               orbital_period:
 *                 type: number
 *               climate:
 *                 type: string
 *               gravity:
 *                 type: string
 *               surface_water:
 *                 type: string
 *               population:
 *                 type: string
 *               created:
 *                 type: string
 *               edited:
 *                 type: string
 *             required:
 *               - name
 *               - diameter
 *               - terrain
 *     responses:
 *       201:
 *         description: Created. Returns the ID of the newly created planet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Planet created with id: 60b10f900c8f732732fb59de"
 *       400:
 *         description: Bad Request. Missing required field.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: "Missing required field"
 *       500:
 *         description: Internal Server Error. Failed to create planet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 error:
 *                   type: object
 *               example:
 *                 message: "Something went wrong while creating the planet"
 *                 error: { ... }
 */
router.post("/", postPlanet);

/**
 * @swagger
 * /planets/{id}:
 *   put:
 *     tags:
 *       - Planets
 *     summary: Update an existing planet by ID.
 *     description: Update an existing planet with the provided data.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the planet to update.
 *         required: true
 *         type: string
 *       - name: body
 *         in: body
 *         description: Data to update the planet.
 *         required: true
 *         schema:
 *           $ref: '#/definitions/PlanetInput'
 *     responses:
 *       200:
 *         description: Planet updated successfully.
 *         schema:
 *           $ref: '#/definitions/Planet'
 *       400:
 *         description: Bad Request. Invalid planet ID or no data to update.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Not Found. Planet not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while updating the planet.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.put("/:id", putPlanet);

/**
 * @swagger
 * /planets/{id}:
 *   delete:
 *     tags:
 *       - Planets
 *     summary: Delete a planet by ID.
 *     description: Delete a planet with the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the planet to delete.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Planet deleted successfully.
 *         schema:
 *           $ref: '#/definitions/SuccessMessage'
 *       400:
 *         description: Bad Request. Invalid planet ID.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Not Found. Planet not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while deleting the planet.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete("/:id", deletePlanet);

module.exports = router;
