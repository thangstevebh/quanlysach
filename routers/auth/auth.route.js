export default async (router) => {
  //prefix
  router.use("/auth/", router);

  //api
  //localhost:8181/api/auth/login
  router.get("/login");
};
