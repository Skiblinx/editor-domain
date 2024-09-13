export {};
const configEnv = require("./config/env");
const TailordomFactory = require("./lib");
const startServer = require("./api");

(async () => {
  //start server
  const td = TailordomFactory({
    jwtSecret: configEnv.JWT_SECRET
  });

  //init app lib and cores
  await td.start();

  //start api server
  startServer(td, td.config.env.PORT, td.config.env);
})();
