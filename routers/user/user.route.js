const express = require("express");

const {
  getUserController,
  createUserController,
  getUserByIdController,
} = require("../../controllers/user/user.controller");

module.exports = async (router) => {
  //prefix
  router.use("/user/", router);

  //api
  //localhost:8181/api/user/get-user
  //localhost:8282/api/user/create-user
  router
    .get("/get-user", getUserController)
    .post("/create-user", createUserController)
    .get("/get-user-by-id/:id", getUserByIdController);
};
