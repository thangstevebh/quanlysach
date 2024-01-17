const {
  createUser,
  getUserByIdSevice,
} = require("../../services/user/user.services");

const getUserController = (req, res) => {
  return res.status(200).json({ user: "John Doe" });
};

const createUserController = async (req, res) => {
  const { firstName, lastName, password, email, gender } = await req.body;

  const userServiceResponse = await createUser({
    firstName,
    lastName,
    password,
    email,
    gender,
  });
  console.log(userServiceResponse);
  return res.status(201).json(userServiceResponse);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;

  const getUserByIdResponse = await getUserByIdSevice({ userId: id });

  return res.status(200).json(getUserByIdResponse);
};

module.exports = {
  getUserController,
  createUserController,
  getUserByIdController,
};
