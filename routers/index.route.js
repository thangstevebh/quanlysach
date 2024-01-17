const express = require("express");

const router = express.Router();

const userRoute = require("./user/user.route");
const authRoute = require("./auth/auth.route");

const routers = (app) => {
  app.get("/", (req, res) => {
    res.send("Hello Express, I'm");
  });

  //localhost:8181/api/hello
  app.use("/api/", router);

  //User Router
  //localhost:8181/api/
  userRoute(router);

  //auth router
  authRoute(router);
};

module.exports = routers;
