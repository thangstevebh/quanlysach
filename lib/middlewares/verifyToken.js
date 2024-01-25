import UserModel from "../../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  const authorization = await req.headers["authorization"];
  const accessToken = authorization?.split(/Bearer\s/)[1];
  if (!accessToken) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  try {
    const userDecode = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

    const user = await UserModel.findOne({
      email: userDecode.email,
    })
      .select(["-password", "-salt"])
      .exec();

    req.user = user;

    next();
  } catch (err) {
    return res.status(403).json({
      statusCode: 403,
      message: `${err.message} Error!`,
      data: {},
    });
  }
};
