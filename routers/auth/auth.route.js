import {
  registerController,
  loginController,
} from "../../controllers/auth/auth.controller.js";

export default async (router) => {
  console.log(123);
  //prefix
  router.use("/auth/", router);

  //api
  //localhost:8181/api/auth/register
  router
    .post("/register/", registerController)
    .post("/login/", loginController);
};
