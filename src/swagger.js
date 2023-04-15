const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Star Wars API",
      version: "1.0.0",
      description: "Star Wars API documentation",
    },
    basePath: "/",
  },
  apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Docs are available at http://localhost:${port}/api-docs`);
};

module.exports = { swaggerDocs };
