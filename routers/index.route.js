import express from "express";
import userRoute from "./user/user.route.js";
import authRoute from "./auth/auth.route.js";

const router = express.Router();

export default async (app) => {
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
