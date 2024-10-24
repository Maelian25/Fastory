"use strict";

const Hapi = require("@hapi/hapi");
const Jwt = require("@hapi/jwt");
const { jwtConfig } = require("./config/jwtConfig");
const authRoutes = require("./routes/authRoutes");
const swapiRoutes = require("./routes/swapiRoutes");

const init = async () => {
  const server = Hapi.server({
    port: 3001,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
        headers: ["Accept", "Content-Type", "Authorization"],
        exposedHeaders: ["WWW-Authenticate", "Server-Authorization"],
        credentials: true,
      },
    },
  });
  await server.register(Jwt);

  server.auth.strategy("jwt", "jwt", jwtConfig);

  server.auth.default("jwt");

  server.route([...authRoutes, ...swapiRoutes]);

  await server.start();
  console.log("Serveur Hapi en cours d'exécution sur %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
