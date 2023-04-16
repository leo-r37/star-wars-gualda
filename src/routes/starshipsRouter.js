const router = require("express").Router();

const {
  getStarships,
  getStarshipById,
  postStarship,
  putStarship,
  deleteStarship,
} = require("../controllers/starshipsControllers.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     Starship:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         model:
 *           type: string
 *         manufacturer:
 *           type: string
 *         cost_in_credits:
 *           type: string
 *         length:
 *           type: string
 *         max_atmosphering_speed:
 *           type: string
 *         crew:
 *           type: string
 *         passengers:
 *           type: string
 *         cargo_capacity:
 *           type: number
 *         consumables:
 *           type: string
 *         hyperdrive_rating:
 *           type: number
 *         MGLT:
 *           type: number
 *         starship_class:
 *           type: string
 *         created:
 *           type: string
 *         edited:
 *           type: string
 *       required:
 *         - name
 *         - model
 */

/**
 * @swagger
 * /starships:
 *   get:
 *     tags:
 *       - Starships
 *     summary: Get all starships.
 *     description: Get all starships.
 *     responses:
 *       200:
 *         description: Starships retrieved successfully.
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Starship'
 *       404:
 *         description: Not Found. Starships not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while retrieving starships.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get("/", getStarships);

/**
 * @swagger
 * /starships/{id}:
 *   get:
 *     tags:
 *       - Starships
 *     summary: Get a starship by ID.
 *     description: Get a starship by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the starship to retrieve.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Starship retrieved successfully.
 *         schema:
 *           $ref: '#/definitions/Starship'
 *       400:
 *         description: Bad Request. Invalid starship ID.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Not Found. Starship not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while retrieving the starship.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.get("/:id", getStarshipById);

/**
 * @swagger
 * /starships:
 *   post:
 *     tags:
 *       - Starships
 *     summary: Create a new starship.
 *     description: Create a new starship with the specified fields.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/StarshipInput'
 *           example:
 *             name: Millennium Falcon
 *             model: YT-1300 Light Freighter
 *             manufacturer: Corellian Engineering Corporation
 *             cost_in_credits: 100000
 *             length: 34.37
 *             max_atmosphering_speed: 1050
 *             crew: 4
 *             passengers: 6
 *             cargo_capacity: 100000
 *             consumables: "2 months"
 *             hyperdrive_rating: 0.5
 *             MGLT: 75
 *             starship_class: "Light freighter"
 *             created: "2022-03-15T10:30:00Z"
 *             edited: "2022-03-15T10:30:00Z"
 *     responses:
 *       201:
 *         description: Starship created successfully.
 *         schema:
 *           type: string
 *           description: ID of the created starship.
 *       400:
 *         description: Bad Request. Missing required field(s).
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while creating the starship.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post("/", postStarship);

/**
 * @swagger
 * /starships/{id}:
 *   put:
 *     tags:
 *       - Starships
 *     summary: Update a starship by ID.
 *     description: Update the fields of an existing starship with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID of the starship to be updated.
 *         example: 614c5ecb0910d681c93e4a9f
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/StarshipInput'
 *           example:
 *             name: Millennium Falcon
 *             model: YT-1300 Light Freighter
 *             manufacturer: Corellian Engineering Corporation
 *             cost_in_credits: 150000
 *             length: 34.37
 *             max_atmosphering_speed: 1050
 *             crew: 4
 *             passengers: 6
 *             cargo_capacity: 100000
 *             consumables: "2 months"
 *             hyperdrive_rating: 0.5
 *             MGLT: 75
 *             starship_class: "Light freighter"
 *             created: "2022-03-15T10:30:00Z"
 *             edited: "2022-03-15T10:30:00Z"
 *     responses:
 *       200:
 *         description: Starship updated successfully.
 *         schema:
 *           $ref: '#/definitions/Starship'
 *       400:
 *         description: Bad Request. No data to update or invalid starship ID.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Starship not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while updating the starship.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.put("/:id", putStarship);

/**
 * @swagger
 * /starships/{id}:
 *   delete:
 *     tags:
 *       - Starships
 *     summary: Delete a starship by ID.
 *     description: Delete an existing starship with the specified ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: ID of the starship to be deleted.
 *         example: 614c5ecb0910d681c93e4a9f
 *     responses:
 *       204:
 *         description: Starship deleted successfully.
 *       400:
 *         description: Bad Request. Invalid starship ID.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Starship not found.
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal Server Error. Something went wrong while deleting the starship.
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.delete("/:id", deleteStarship);

module.exports = router;
