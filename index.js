const express = require("express");
const app = express();
const apiRouter = require("./src/routes");
const { logErrors, errorHandler } = require("./src/middlewares/errorHandler");
const config = require("./src/lib/config");

app.use(express.json());
apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.json({ message: "El API ya no funciona" });
});

// Ejecutando el servidor HTTP
app.listen(config.app.port, () =>
  console.log(`Esuchando peticiones HTTP en el puerto ${config.app.port}`)
);
