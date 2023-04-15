require("dotenv").config();
const { swaggerDocs } = require("./src/swagger");

const server = require("./src/app.js");

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
  swaggerDocs(server, PORT);
});
