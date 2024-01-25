import {
  registerController,
  loginController,
} from "../../controllers/auth/auth.controller.js";
import { createUserSchema } from "../../controllers/user/user.validate.js";
import { validator } from "../../lib/middlewares/validator.js";

export default async (router) => {
  //prefix
  router.use("/auth/", router);

  //api
  //localhost:8181/api/auth/register
  router
    .post("/register/", validator(createUserSchema), registerController)
    .post("/login/", loginController);
};
