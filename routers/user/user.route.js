import {
  getUserController,
  createUserController,
  getUserByIdController,
  getProfileController,
} from "../../controllers/user/user.controller.js";
import { checkRole } from "../../lib/middlewares/checkRole.js";
import { validator } from "../../lib/middlewares/validator.js";

import { verifyToken } from "../../lib/middlewares/verifyToken.js";

export default async (router) => {
  //prefix
  router.use("/user/", router);

  //api
  //localhost:8181/api/user/get-user
  //localhost:8282/api/user/create-user
  router
    .get("/get-user", getUserController)
    .post("/create-user", createUserController)
    .get("/get-user-by-id/:id", getUserByIdController)
    .get(
      "/get-profile",
      verifyToken,
      checkRole("CUSTOMER"),
      getProfileController,
    );
};
