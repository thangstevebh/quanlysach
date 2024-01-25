export const checkRole = (role) => {
  return (req, res, next) => {
    try {
      const user = req?.user;
      if (user.role !== role) {
        res.status(400).json({
          statusCode: 400,
          message: "PERMISSION FAILED",
        });
      }
      next();
    } catch (error) {
      console.log(error.message);
    }
  };
};
