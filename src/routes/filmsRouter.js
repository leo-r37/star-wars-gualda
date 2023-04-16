const router = require("express").Router();

const {
  getFilms,
  getFilmById,
  postFilm,
  putFilm,
  deleteFilm,
} = require("../controllers/filmsControllers");

/**
 * @swagger
 * tags:
 *   - name: Films
 *     description: Operations related to films
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Film:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         episode_id:
 *           type: number
 *         opening_crawl:
 *           type: string
 *         director:
 *           type: string
 *         producer:
 *           type: string
 *         release_date:
 *           type: string
 *         created:
 *           type: string
 *         edited:
 *           type: string
 *       required:
 *         - title
 *         - director
 *         - release_date
 */

/**
 * @swagger
 * /films:
 *   get:
 *     tags:
 *       - Films
 *     summary: Returns all existing films records.
 *     description: Returns an array with all the existing films in the database, including all the key-values of the same
 *     responses:
 *       200:
 *         description: Answer with the array of films.
 *       404:
 *         description: If there are no movies, it returns the error.
 *       500:
 *         description: If an error occurs while getting the films.
 */
router.get("/", getFilms);

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     tags:
 *      - Films
 *     summary: Get a film by ID.
 *     description: Get an existing film by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film to be retrieved.
 *         required: true
 *         schema:
 *           type: string
 *         example: 5f8b5ab85660f25bd382cfd6
 *     responses:
 *       200:
 *         description: Film retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *             example:
 *               _id: 5f8b5ab85660f25bd382cfd6
 *               title: "Star Wars: Episode IV - A New Hope"
 *               episode_id: 4
 *               opening_crawl: "It is a period of civil war..."
 *               director: "George Lucas"
 *               producer: "Gary Kurtz, Rick McCallum"
 *               release_date: "1977-05-25"
 *               created: "2021-01-01T00:00:00.000Z"
 *               edited: "2021-01-01T00:00:00.000Z"
 *       400:
 *         description: Invalid film ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Invalid film ID
 *       404:
 *         description: Film not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Film not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal server error
 */
router.get("/:id", getFilmById);

/**
 * @swagger
 * /films:
 *   post:
 *     tags:
 *     - Films
 *     summary: Create a new film.
 *     description: Create a new film with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the film.
 *               episode_id:
 *                 type: integer
 *                 description: Episode ID of the film.
 *               opening_crawl:
 *                 type: string
 *                 description: Opening crawl of the film.
 *               director:
 *                 type: string
 *                 description: Director of the film.
 *               producer:
 *                 type: string
 *                 description: Producer of the film.
 *               release_date:
 *                 type: string
 *                 description: Release date of the film.
 *               created:
 *                 type: string
 *                 description: Creation timestamp of the film.
 *               edited:
 *                 type: string
 *                 description: Last edit timestamp of the film.
 *             required:
 *               - title
 *               - director
 *               - release_date
 *     responses:
 *       201:
 *         description: Film created successfully.
 *       400:
 *         description: Bad request with missing required field(s).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message.
 *                 error:
 *                   type: object
 *                   description: Additional error information.
 */
router.post("/", postFilm);

/**
 * @swagger
 * /films/{id}:
 *   put:
 *     tags:
 *     - Films
 *     summary: Update a film by ID.
 *     description: Update an existing film with the provided data.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film to be updated.
 *         required: true
 *         schema:
 *           type: string
 *         example: 5f8b5ab85660f25bd382cfd6
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               episode_id:
 *                 type: integer
 *               opening_crawl:
 *                 type: string
 *               director:
 *                 type: string
 *               producer:
 *                 type: string
 *               release_date:
 *                 type: string
 *                 format: date
 *               created:
 *                 type: string
 *                 format: date-time
 *               edited:
 *                 type: string
 *                 format: date-time
 *             example:
 *               title: A New Film
 *               director: John Doe
 *     responses:
 *       200:
 *         description: Film updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Film'
 *       400:
 *         description: Invalid film ID or missing data to update.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Invalid film ID or missing data to update.
 *       404:
 *         description: Film not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Film not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal server error.
 */
router.put("/:id", putFilm);

/**
 * @swagger
 * /films/{id}:
 *   delete:
 *     tags:
 *     - Films
 *     summary: Delete a film by ID.
 *     description: Delete an existing film by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *         example: 5f8b5ab85660f25bd382cfd6
 *     responses:
 *       200:
 *         description: Film deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: Film with id 5f8b5ab85660f25bd382cfd6 removed successfully
 *       400:
 *         description: Invalid film ID.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Invalid film ID
 *       404:
 *         description: Film not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Film not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: Internal server error
 */
router.delete("/:id", deleteFilm);

module.exports = router;
